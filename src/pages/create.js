import { useState } from 'react';

export default function CreateCard() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold">Create Your Digital Business Card</h1>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 m-2"
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 m-2"
        />
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="border p-2 m-2"
        />
      </div>
      <div className="mt-6 p-4 border rounded">
        <h2 className="text-xl font-semibold">Preview</h2>
        <p>Name: {name}</p>
        <p>Title: {title}</p>
        <p>Company: {company}</p>
      </div>
    </div>
  );
} 