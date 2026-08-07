import { writeFile, mkdir } from "fs/promises";
import path from "path";
import crypto from "crypto";

const RESUME_DIR = path.join(process.cwd(), "uploads", "resumes");

function sanitizeFileName(name) {
  return name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
}

export async function saveResumeFile(file) {
  await mkdir(RESUME_DIR, { recursive: true });

  const safeName = sanitizeFileName(file.name);
  const storedName = `${crypto.randomUUID()}-${safeName}`;
  const buffer = Buffer.from(await file.arrayBuffer());

  await writeFile(path.join(RESUME_DIR, storedName), buffer);

  return { resumePath: storedName, resumeName: file.name };
}

export function getResumeAbsolutePath(resumePath) {
  return path.join(RESUME_DIR, resumePath);
}

export function getResumeContentType(resumeName) {
  const ext = resumeName.split(".").pop().toLowerCase();

  if (ext === "pdf") return "application/pdf";
  if (ext === "doc") return "application/msword";
  if (ext === "docx") {
    return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  }

  return "application/octet-stream";
}
