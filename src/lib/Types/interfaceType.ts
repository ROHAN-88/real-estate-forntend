//?For signup TypeCheck
export type SignUpValue = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword?: string;
  dob: Date;
  gender: string;
  role: string;
  number: string;
};

//?For login TypeCheck
export type LoginValue = {
  email: string;
  password: string;
};
