/* eslint-disable react/prop-types */

export function RenderError({ error }) {
  return (
    <div>
      <p style={{ display: "inline" }}>Something went wrong: </p>
      <span style={{ color: "#BB5010" }}>{error?.message}</span>
    </div>
  );
}
