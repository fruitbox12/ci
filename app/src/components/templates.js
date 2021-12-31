import React from "react";
import Embed from "./embed";

const TEMPLATES = [
  "https://github.com/websaam/lit-cloudflare-frontend",
];

export default () => (
  <div className="grid grid-cols-1 gap-6">
    {TEMPLATES.map((template) => (
      <Embed key={template} url={template} />
    ))}
  </div>
);
