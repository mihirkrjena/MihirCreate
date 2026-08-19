/*
# Create messages table for contact form submissions

1. New Tables
- `messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email
  - `message` (text, not null) — the message body
  - `read` (boolean, default false) — mark as read/unread
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `messages`.
- This is a single-tenant portfolio site with no sign-in screen, so the
  public contact form needs anon INSERT access. SELECT/UPDATE/DELETE are
  intentionally NOT granted to anon (only the owner via the dashboard/
  authenticated role would read/manage messages). For completeness we
  scope read access to authenticated.
- anon + authenticated can INSERT (so the public form works).
*/

CREATE TABLE IF NOT EXISTS messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_message" ON messages;
CREATE POLICY "anon_insert_message"
  ON messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_read_messages" ON messages;
CREATE POLICY "authenticated_read_messages"
  ON messages FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "authenticated_update_messages" ON messages;
CREATE POLICY "authenticated_update_messages"
  ON messages FOR UPDATE
  TO authenticated
  USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_delete_messages" ON messages;
CREATE POLICY "authenticated_delete_messages"
  ON messages FOR DELETE
  TO authenticated
  USING (true);
