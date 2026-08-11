function escapeCsvField(value) {
  const str = value === null || value === undefined ? "" : String(value);

  if (/[",\n\r]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }

  return str;
}

export function buildCsv(columns, rows) {
  const header = columns.map((col) => escapeCsvField(col.label)).join(",");

  const lines = rows.map((row) =>
    columns.map((col) => escapeCsvField(col.value(row))).join(",")
  );

  return [header, ...lines].join("\r\n");
}

export function csvResponse(csv, filenamePrefix) {
  const date = new Date().toISOString().slice(0, 10);
  const filename = `${filenamePrefix}-${date}.csv`;

  return new Response(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
