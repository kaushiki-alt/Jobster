import { Logo } from "../components"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useLoginUser, useRegisterUser } from "@/hooks/auth";
import type { RegisterData } from "@/types";


type RegisterFormProps = {
  values: RegisterData;
  changefn: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitfn: (e: React.SyntheticEvent<HTMLFormElement>) => void;
  memberTogglefn: () => void;
};

export default function RegisterForm({ values, submitfn, changefn, memberTogglefn }: RegisterFormProps) {
  const registerMutation = useRegisterUser();
  const loginMutation = useLoginUser();
  const fields = [
    ...(!values.isMember
      ? [{ name: "name", labelText: "name", type: "text" }]
      : []),
    { name: "email", labelText: "email", type: "email" },
    { name: "password", labelText: "password", type: "password" },
  ];

  return <form className="form max-w-100 text-center" onSubmit={submitfn}>
    <Logo />
    <h3 >{values.isMember ? 'Login' : 'Register'}</h3>
    <FieldGroup className="mt-6 capitalize">
      {fields.map((field) => (
        <FormRow
          key={field.name}
          name={field.name}
          labelText={field.labelText}
          type={field.type}
          value={values[field.name as keyof typeof values] as string}
          handleChange={changefn}
        />
      ))}
      <Field orientation="vertical">
        <Button type="submit" disabled={values.isMember ? loginMutation.isPending : registerMutation.isPending} variant='default' className="btn">Submit</Button>
        <Button variant="secondary" className="btn-hipster">
          Demo App
        </Button>
      </Field>
    </FieldGroup>
    <p className="mt-3">{values.isMember ? 'Not a member yet?' : 'Already a member?'}
      <button type='button' onClick={memberTogglefn} className='member-btn' disabled={values.isMember ? registerMutation.isPending : loginMutation.isPending}>
        {values.isMember ? ' Register' : ' Login'}
      </button>
    </p>
  </form>
}
type FormRowProps = {
  labelText: string;
  name: string;
  type: React.HTMLInputTypeAttribute;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FormRow({ labelText, name, type, value, handleChange }: FormRowProps) {
  return (
    <Field>
      <FieldLabel htmlFor={name} className="capitalize"><h5 className="m-0 text-md">{labelText || name}</h5></FieldLabel>
      <Input id={name} name={name} type={type} value={value} onChange={handleChange} className="form-input" />
    </Field>);
}

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OWFlODIxNjY2NzM5ZTNmYjkzMjBkNjIiLCJuYW1lIjoia2F1c2hpa2kiLCJpYXQiOjE3NzMwNDQyNDcsImV4cCI6MTc3MzEzMDY0N30.lxzyW1JpNrTNmiMWv8-2eFbzw9v5xXtWxyUTX_Rk7HY"