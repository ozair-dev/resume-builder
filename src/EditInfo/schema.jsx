import * as yup from "yup";

yup.addMethod(yup.mixed, "validTime", function (message) {
  return this.test("valid-time", message, function (value) {
    return new Date(value).toString() !== "Invalid Date";
  });
});

const schema = yup.object({
  photo: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  address: yup.string().required(),
  role: yup.string().required(),
  about: yup.string().min(50).required(),
  educations: yup.array().of(
    yup.object({
      studyProgram: yup.string().required("study program is a required field"),
      institute: yup.string().required("institute is a required field"),
      started: yup.mixed().validTime("started field is invalid"),
      ended: yup.mixed().validTime("ended field is invalid"),
    })
  ),
  experiences: yup.array().of(
    yup.object({
      title: yup.string().required("title field is invalid"),
      company: yup.string().required("company field is invalid"),
      location: yup.string().required("location field is invalid"),
      started: yup.mixed().validTime("started field is invalid"),
      ended: yup.mixed().validTime("ended field is invalid"),
      responsibilities: yup
        .array()
        .of(yup.string().required("this is a required field")),
    })
  ),
  skills: yup
    .array()
    .of(
      yup.object({ skill: yup.string().required("skill is a required field") })
    )
    .min(3, "please enter atleast 3 skills")
    .required("please enter atleast 3 skills"),
  projects: yup.array().of(
    yup.object({
      name: yup.string().required("name field is required"),
      description: yup.string().required("description field is required"),
      finished: yup.mixed().validTime("finished field is invalid"),
    })
  ),
  socials: yup
    .array()
    .of(
      yup.string().url("not a valid URL").required("social is a required field")
    ),
  interests: yup.array().of(
    yup.object({
      interest: yup.string().required("interest is a required field"),
    })
  ),
  birthDate: yup.mixed().validTime("birth date is not valid"),
});

export default schema;
