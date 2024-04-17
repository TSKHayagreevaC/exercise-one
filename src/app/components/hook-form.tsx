import { Button, Grid, TextField } from "@mui/material"
import * as React from "react"
import { useForm } from "react-hook-form"
import type { ListItem } from "../views/details"


export default function HookForm(item:ListItem) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ListItem>()
  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <form onSubmit={onSubmit}>
        <Grid>
            <Grid>
                <TextField {...register("name")} variant="standard" label="Name" />
            </Grid>
            <Grid>
                <TextField {...register("model")} variant="standard" label="Model" />
            </Grid>
            <Grid>
                <TextField {...register("brand")} variant="standard" label="Brand" />
            </Grid>
            <Grid>
                <TextField {...register("yearOfRelease")} variant="standard" label="Year Of Release" />
            </Grid>
            <Grid>
                <TextField {...register("color")} variant="standard" label="Color" />
            </Grid>
        </Grid>
      <Button
        sx={{mt:2}}
        variant="contained"
        type="button"
        size="small"
        onClick={() => {
          setValue("name", "name")
          setValue("model", "model") 
          setValue("brand", "brand") 
          setValue("yearOfRelease", 2023)
          setValue("color", "Grey")
        }}
      >
        SetValue
      </Button>
    </form>
  )
}