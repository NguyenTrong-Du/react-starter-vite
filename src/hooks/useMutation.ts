import { UseFormReturn } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMutation as RQMutation } from '@tanstack/react-query'
import { toastErrors } from 'locales/i18n'
import { useSnackbar } from 'notistack'
import { MutationFnVariables } from 'types'
import Utils from 'utils'

export default function useMutation(options?: Partial<UseFormReturn<any>>) {
  const { enqueueSnackbar } = useSnackbar()
  const { t } = useTranslation()

  const result = RQMutation<any, any, MutationFnVariables, any>({
    onError: (error, variables) => {
      if (variables?.disableParentOnError) return

      const errorCode = error?.response?.data?.error?.code

      if (!errorCode) {
        if (variables?.errorMessage) {
          enqueueSnackbar(variables.errorMessage, { variant: 'error' })
        }
        return
      }

      const setError = options?.setError

      if (!setError) {
        if (toastErrors.includes(errorCode)) {
          enqueueSnackbar(
            t(`common.toastError.${errorCode}`, { values: variables.data }),
            { variant: 'error' }
          )
        }
        return
      }

      const { fieldNames, translationKey } = Utils.getValidatorError(errorCode)

      if (fieldNames?.length) {
        fieldNames.forEach((field) => {
          setError(field, {
            type: 'manual',
            message: t(translationKey, { values: variables.data })
          })
        })

        if (options?.setFocus) {
          options.setFocus(fieldNames[0])
        }
        return
      }

      if (toastErrors.includes(errorCode)) {
        enqueueSnackbar(
          t(`common.toastError.${errorCode}`, { values: variables.data }),
          { variant: 'error' }
        )
      }
    }
  })

  return result
}
