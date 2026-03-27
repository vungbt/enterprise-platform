"use client";

import {
  useAppForm,
  Form,
  FormSubmit,
  FormField,
  Input,
  InputPassword,
  Select,
  DatePicker,
  DateRangePicker,
  TimePicker,
  RadioGroup,
  Button,
  Checkbox,
  z,
  type DateRange,
} from "@enterprise/ui/components";

const schema = {
  fullName: z.string().min(2, "Tối thiểu 2 ký tự"),
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(8, "Mật khẩu tối thiểu 8 ký tự"),
  role: z
    .object({ label: z.string(), value: z.string() })
    .nullable()
    .refine((value) => value !== null, "Vui lòng chọn vai trò"),
  joinedDate: z
    .date()
    .nullable()
    .refine((value) => value !== null, "Vui lòng chọn ngày tham gia"),
  workTime: z
    .string()
    .nullable()
    .refine((value) => value !== null, "Vui lòng chọn giờ làm việc"),
  workPeriod: z
    .tuple([z.date().nullable(), z.date().nullable()])
    .nullable()
    .refine((value) => value !== null && value[0] !== null && value[1] !== null, "Vui lòng chọn khoảng thời gian"),
  status: z
    .string()
    .refine((value) => value === "active" || value === "inactive", "Vui lòng chọn trạng thái"),
  agree: z.boolean().refine((v) => v === true, "Bạn phải đồng ý điều khoản"),
};

const roleOptions = [
  { label: "Admin", value: "admin" },
  { label: "Manager", value: "manager" },
  { label: "Staff", value: "staff" },
];

const statusOptions = [
  { label: "Đang hoạt động", value: "active" },
  { label: "Tạm ngưng", value: "inactive" },
];

export function DemoForm() {
  const form = useAppForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      role: null as { label: string; value: string } | null,
      joinedDate: null as Date | null,
      workTime: null as string | null,
      workPeriod: null as DateRange | null,
      status: "",
      agree: false,
    },
    onSubmit: ({ value }) => {
      alert(JSON.stringify(value, null, 2));
    },
  });

  return (
    <Form form={form} schema={schema} className="space-y-4">
      <FormField name="fullName" label="Họ và tên" required>
        <Input placeholder="Nhập họ và tên" />
      </FormField>

      <FormField name="email" label="Email" required>
        <Input type="email" placeholder="example@email.com" icon="envelope" />
      </FormField>

      <FormField name="role" label="Vai trò" required>
        <Select options={roleOptions} placeholder="Chọn vai trò..." />
      </FormField>

      <FormField name="joinedDate" label="Ngày tham gia" required>
        <DatePicker isClearable />
      </FormField>

      <FormField name="workTime" label="Giờ làm việc" required>
        <TimePicker isClearable format="HH:mm" />
      </FormField>

      <FormField name="workPeriod" label="Khoảng thời gian" required>
        <DateRangePicker isClearable placeholder="Chọn khoảng thời gian..." />
      </FormField>

      <FormField name="status" label="Trạng thái" required>
        <RadioGroup options={statusOptions} />
      </FormField>

      <FormField name="password" label="Mật khẩu" required>
        <InputPassword placeholder="Tối thiểu 8 ký tự" />
      </FormField>

      <FormField name="agree">
        <Checkbox
          label={
            <span className="text-14 text-neutral-text-primary">
              Tôi đồng ý với{' '}
              <span className="text-primary cursor-pointer underline">điều khoản sử dụng</span>
            </span>
          }
        />
      </FormField>

      <FormSubmit form={form}>
        {(isSubmitting) => (
          <Button type="submit" loading={isSubmitting} className="w-full">
            Đăng ký
          </Button>
        )}
      </FormSubmit>
    </Form>
  );
}
