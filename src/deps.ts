// When upgrading std versions, ensure to check this list's `cli_to_std` section: https://raw.githubusercontent.com/denoland/dotland/main/versions.json
// Whatever minimum deno version we are recommending to users, we should use that version to determine what version of std
// we should use in our libraries.

// Current recommended deno version: 1.31.1 (version of deno used by Run on Slack)
// Recommended stdlib version to use with above deno version: 0.178.0
export {
  createHttpError,
  HttpError,
} from "https://deno.land/std@0.178.0/http/http_errors.ts";
