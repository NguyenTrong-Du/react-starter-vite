import { UseFormReturn } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMutation as RQMutation } from '@tanstack/react-query'
import Const from 'constants/common'
import { useSnackbar } from 'notistack'
import { MutationFnVariables, ToastErrorCode, ValidationErrorCode } from 'types'

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
        const message = Const.TOAST_ERROR_CODES[errorCode as ToastErrorCode]
        if (message) {
          enqueueSnackbar(t(message), { variant: 'error' })
        }
        return
      }

      const errorFields =
        Const.VALIDATION_ERROR_CODES[errorCode as ValidationErrorCode]

      if (errorFields?.length) {
        errorFields.forEach((field) => {
          setError(field, {
            type: 'manual',
            message: t(`common.validationError.${errorCode}`)
          })
        })

        if (options?.setFocus) {
          options.setFocus(errorFields[0])
        }
        return
      }

      const message = Const.TOAST_ERROR_CODES[errorCode as ToastErrorCode]
      if (message) {
        enqueueSnackbar(t(message), { variant: 'error' })
      }
    }
  })

  return result
}
