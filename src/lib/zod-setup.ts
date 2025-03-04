import { z, ZodIssueCode, ZodParsedType } from "zod";
import type { ZodErrorMap } from "zod";

const errorMap: ZodErrorMap = (issue, _ctx) => {
  let message: string = _ctx.defaultError;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "必須";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "string") {
        message = `${issue.minimum}文字${issue.exact ? "で" : issue.inclusive ? "以上で" : "より多く"}入力してください`;
      }
  }
  return { message };
};

z.setErrorMap(errorMap);
