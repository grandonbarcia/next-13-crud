async function getNotes() {
  const res = await fetch(
    'http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30',
    { cache: 'no-store' }
  );

  
}

export default async function NotesPage() {
  return (
    <div>
      <h1>Notes</h1>
    </div>
  );
}
