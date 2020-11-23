import React, { memo } from "react"
import { useFormik } from "formik"
import PropTypes from "prop-types"
import * as Yup from "yup"

import { Box, Button, TextField } from "@material-ui/core"

const validationSchema = Yup.object().shape({
  text: Yup.string().required(),
})

const ChatForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      text: "",
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values.text)
      formik.resetForm()
    },
  })

  return (
    <Box display="flex" alignItems="flex-end">
      <TextField
        id="text"
        name="text"
        variant="outlined"
        value={formik.values.text}
        multiline
        fullWidth
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      <Button
        disabled={!(formik.isValid && formik.dirty)}
        onClick={formik.submitForm}
      >
        Send
      </Button>
    </Box>
  )
}

ChatForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default memo(ChatForm)
