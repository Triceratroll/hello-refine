import {
  Create,
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@pankod/refine-mui";
import { useForm, Controller } from "@pankod/refine-react-hook-form";

export const UserCreate = () => {
  const {
    saveButtonProps,
    refineCore: { formLoading },
    register,
    control,
    formState: { errors },
  } = useForm();

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <h1>Journalio Dashboard</h1>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <TextField
          {...register("Site", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.firstName}
          helperText={(errors as any)?.firstName?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Site Name"
          name="firstName"
        />
        <TextField
          {...register("lastName", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.lastName}
          helperText={(errors as any)?.lastName?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Last Name"
          name="lastName"
        />
        <TextField
          {...register("email", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.email}
          helperText={(errors as any)?.email?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="email"
          label="Email"
          name="email"
        />
        <Controller
          control={control}
          name="status"
          // eslint-disable-next-line
          defaultValue={null as any}
          render={({ field }) => (
            <FormControlLabel
              label="Status"
              control={
                <Checkbox
                  {...field}
                  checked={field.value}
                  onChange={(event) => {
                    field.onChange(event.target.checked);
                  }}
                />
              }
            />
          )}
        />
        {/* 
                    DatePicker component is not included in "@pankod/refine-mui" package.
                    To use a <DatePicker> component, you can follow the official documentation for Material UI.
                    
                    Docs: https://mui.com/x/react-date-pickers/date-picker/#basic-usage
                */}
        <TextField
          {...register("birthday", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.birthday}
          helperText={(errors as any)?.birthday?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          label="Birthday"
          name="birthday"
        />
      </Box>
    </Create>
  );
};
