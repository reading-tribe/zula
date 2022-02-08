import React, { useEffect, useState } from "react";
import { Login } from "../components/auth/login/Login";
import ZulaLayoutThreeColumn from "../components/ZulaLayoutThreeColumn";

export default function LoginPage() {
  return <ZulaLayoutThreeColumn content={<Login />} />;
}
