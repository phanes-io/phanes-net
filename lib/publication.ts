/** Dates are calendar days in Europe/Berlin; malformed dates fail closed. */
export function isPublished(date: string, now = new Date()): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const parsed = new Date(date + 'T00:00:00Z');
  if (!Number.isFinite(parsed.getTime()) || parsed.toISOString().slice(0,10) !== date) return false;
  const today = new Intl.DateTimeFormat('en-CA', {timeZone:'Europe/Berlin',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);
  return date <= today;
}
export function safePostSlug(slug: string): boolean { return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug); }
