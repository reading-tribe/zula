import React, { useEffect, useState } from "react";
import { Register } from "../components/auth/register/Register";
import ZulaLayoutThreeColumn from "../components/ZulaLayoutThreeColumn";

export default function RegisterPage() {
  return <ZulaLayoutThreeColumn content={<Register />} />;
}
