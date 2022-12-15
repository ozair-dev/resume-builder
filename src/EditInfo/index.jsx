import React from "react";

import { Link } from "react-router-dom";

import { Box, Button, TextField, Typography, Stack } from "@mui/material";

import PhotoInput from "./PhotoInput";
import Input from "./Input";
import { AddEducation, EditEducation } from "./EducationInput";
import { AddExperience, EditExperience } from "./ExperienceInput";
import { AddSkill, EditSkill } from "./SkillInput";
import { AddProject, EditProject } from "./ProjectInput";
import { AddSocial, EditSocial } from "./SocialInput";
import { AddInterest, EditInterest } from "./InterestInput";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { HiDownload, HiUpload } from "react-icons/hi";

import { useForm, useFieldArray } from "react-hook-form";

import schema from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";

const defaultValues = {
  photo: "",
  name: "",
  email: "",
  phone: "",
  address: "",
  role: "",
  about: "",
  birthDate: new Date().getTime(),
  educations: [],
  experiences: [],
  interests: [],
  projects: [],
  socials: [],
  skills: [],
};

const Index = () => {
  const {
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    formState: { errors, isValid, isSubmitSuccessful },
  } = useForm({
    mode: "all",
    defaultValues: JSON.parse(localStorage.getItem("info")) || defaultValues,
    resolver: yupResolver(schema),
  });
  const {
    fields: socials,
    append: appendSocial,
    remove: removeSocial,
  } = useFieldArray({
    control,
    name: "socials",
  });

  const {
    fields: interests,
    append: appendInterest,
    remove: removeInterest,
  } = useFieldArray({
    control,
    name: "interests",
  });

  const {
    fields: educations,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    control,
    name: "educations",
  });

  const {
    fields: experiences,
    append: appendExperience,
    remove: removeExperience,
  } = useFieldArray({
    control,
    name: "experiences",
  });

  const {
    fields: projects,
    append: appendProject,
    remove: removeProject,
  } = useFieldArray({
    control,
    name: "projects",
  });

  const {
    fields: skills,
    append: appendSkill,
    remove: removeSkill,
  } = useFieldArray({
    control,
    name: "skills",
  });

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (file && file.name.endsWith(".json")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        localStorage.clear();
        reset(JSON.parse(e.target.result));
      };
      reader.readAsText(file);
    }
  };

  const handleReset = () => {
    localStorage.clear();
    reset(defaultValues);
  };

  const onSubmit = (data) => localStorage.setItem("info", JSON.stringify(data));

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Stack direction="row" spacing={1} justifyContent="flex-end">
        <label>
          <input
            type="file"
            onChange={handleImport}
            hidden
            accept="application/JSON"
          />
          <Button
            component="span"
            variant="contained"
            sx={{ textTransform: "none", "& svg": { fontSize: "large" } }}
          >
            <HiUpload />
            Import Info
          </Button>
        </label>
      </Stack>
      <Box
        margin="auto"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: { xs: 0.75, sm: 0.5 } }}
      >
        <PhotoInput
          photo={watch("photo")}
          setPhoto={(value) =>
            setValue("photo", value, { shouldValidate: true })
          }
        />
        {errors.photo && (
          <Typography color="error" fontSize="small" alignSelf="center">
            {errors.photo.message}
          </Typography>
        )}

        <Typography variant="h5" fontWeight="600" color="text.secondary" mt={3}>
          About You
        </Typography>
        <Input
          control={control}
          errors={errors}
          name="name"
          label="Name"
          placeholder="John Doe"
        />
        <Input
          control={control}
          errors={errors}
          name="role"
          label="Role"
          placeholder="Full Stack Web Developer"
        />
        <Input
          control={control}
          errors={errors}
          name="about"
          label="About You"
          placeholder=""
          multiline
          maxRows={5}
        />
        <DatePicker
          label="Birth Date"
          value={new Date(watch("birthDate"))}
          onChange={(v) =>
            setValue("birthDate", v?._d.getTime(), { shouldValidate: true })
          }
          renderInput={(params) => (
            <TextField
              {...params}
              error={!!errors.birthDate}
              helperText={errors.birthDate?.message}
              fullWidth
              variant="standard"
              sx={{ my: 1 }}
            />
          )}
        />

        <Typography variant="h5" fontWeight="600" color="text.secondary" mt={3}>
          Contact Info
        </Typography>
        <Input
          control={control}
          errors={errors}
          name="email"
          label="Email"
          placeholder="johndoe@example.com"
        />
        <Input
          control={control}
          errors={errors}
          name="phone"
          label="Phone"
          placeholder="+1 234 567 8910"
        />
        <Input
          control={control}
          errors={errors}
          name="address"
          label="Address"
        />

        <Typography variant="h5" fontWeight="600" color="text.secondary" mt={3}>
          Education (optional)
        </Typography>

        {educations.map(({ id }, index) => (
          <EditEducation
            key={id}
            control={control}
            index={index}
            watch={watch}
            setValue={setValue}
            errors={errors}
            remove={removeEducation}
          />
        ))}
        <AddEducation append={appendEducation} />

        <Typography variant="h5" fontWeight="600" color="text.secondary" mt={3}>
          Experience (optional)
        </Typography>

        {experiences.map(({ id }, index) => (
          <EditExperience
            key={id}
            remove={removeExperience}
            control={control}
            index={index}
            watch={watch}
            setValue={setValue}
            errors={errors}
          />
        ))}
        <AddExperience append={appendExperience} />

        <Typography variant="h5" fontWeight="600" color="text.secondary" mt={3}>
          Skills
        </Typography>

        {skills.map(({ id }, index) => (
          <EditSkill
            key={id}
            index={index}
            control={control}
            setValue={setValue}
            watch={watch}
            remove={removeSkill}
            errors={errors}
          />
        ))}

        <AddSkill append={appendSkill} />
        <Typography color="error" fontSize="small">
          {errors.skills?.message}
        </Typography>
        <Typography variant="h5" fontWeight="600" color="text.secondary" mt={3}>
          Projects (optional)
        </Typography>

        {projects.map(({ id }, index) => (
          <EditProject
            key={id}
            remove={removeProject}
            index={index}
            control={control}
            watch={watch}
            setValue={setValue}
            errors={errors}
          />
        ))}

        <AddProject append={appendProject} />

        <Typography variant="h5" fontWeight="600" color="text.secondary" mt={3}>
          Socials (optional)
        </Typography>

        {socials.map(({ id }, index) => (
          <EditSocial
            key={id}
            index={index}
            remove={removeSocial}
            watch={watch}
            control={control}
            errors={errors}
          />
        ))}

        <AddSocial append={appendSocial} />

        <Typography
          variant="h5"
          fontWeight="600"
          color="text.secondary"
          mt={3}
          mb={2}
        >
          Your Interests (optional)
        </Typography>

        {interests.map(({ id }, index) => (
          <EditInterest
            key={id}
            index={index}
            remove={removeInterest}
            watch={watch}
            control={control}
            errors={errors}
          />
        ))}
        <AddInterest append={appendInterest} />
        <Typography
          color="info.main"
          fontSize="small"
          mt={2}
          sx={{ "& a": { color: "inherit" } }}
        >
          To add icon related to your interest, go to{" "}
          <a
            href="https://fontawesome.com/search?o=r&m=free"
            target="_blank"
            rel="noreferrer"
          >
            https://fontawesome.com/search
          </a>
          . Use free icons only (solid, regular or brands). Example usage:
          `fa-solid fa-book`
        </Typography>

        <Typography
          mt={3}
          mb={1}
          color="success.light"
          fontSize="small"
          alignSelf="center"
        >
          {isSubmitSuccessful && "Changes saved successfully"}
        </Typography>
        <Stack direction="row" justifyContent="center" width={1} spacing={2}>
          <Button variant="contained" type="submit">
            Save
          </Button>
          {(localStorage.getItem("info") || isSubmitSuccessful) && (
            <>
              <Button
                component="a"
                href={
                  "data:text/plain;charset=utf-8," +
                  encodeURIComponent(localStorage.getItem("info"))
                }
                download="resume-info.json"
                variant="contained"
                title="Download your information"
                sx={{ textTransform: "none", "& svg": { fontSize: "large" } }}
              >
                <HiDownload /> Download Info
              </Button>
              <Button
                onClick={handleReset}
                variant="contained"
                type="button"
                color="error"
              >
                Reset
              </Button>
            </>
          )}
        </Stack>

        {(localStorage.getItem("info") || isSubmitSuccessful) && (
          <Button
            component={Link}
            to="/"
            color="success"
            fullWidth
            sx={{ mt: 2 }}
          >
            Create your resume
          </Button>
        )}
      </Box>
    </LocalizationProvider>
  );
};

export default Index;
