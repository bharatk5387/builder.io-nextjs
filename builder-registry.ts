"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Dashboard from "./components/Dashboard/Dashboard";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Dashboard, {
  name: "Dashboard",
  inputs: [
    {
      name: "balance",
      type: "string",
      defaultValue: "$ 1,893.44",
    },
  ],
});
