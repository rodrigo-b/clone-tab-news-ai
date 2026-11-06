export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          textAlign: "center",
          fontSize: "3rem",
          textTransform: "uppercase",
        }}
      >
        <li>Rodrigo</li>
        <li>Suellen</li>
        <li>Banguela</li>
      </ul>
    </main>
  );
}
