export default function CardChar() {
  return (
    <article className="w-80 h-96 my-10 rounded-2xl flex flex-col justify-between shadow-md">
      <img
        src="https://imgs.search.brave.com/RsuDOGGcPw8y10iqoTSk3jvf8ZI2FhMackrTRhcCSEA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mdW5r/by5jb20vZHcvaW1h/Z2UvdjIvQkdUU19Q/UkQvb24vZGVtYW5k/d2FyZS5zdGF0aWMv/LS9TaXRlcy1mdW5r/by1tYXN0ZXItY2F0/YWxvZy9kZWZhdWx0/L2R3NTFjMmY4OGQv/aW1hZ2VzL2Z1bmtv/L3VwbG9hZC84MDM0/MV9OYXJ1dG9fTGlm/ZXN0eWxlLnBuZz9z/dz0zNDYmc2g9MzQ2"
        alt="Naruto"
        className="w-full h-66 object-cover object-top rounded-t-2xl"
      />
      <span className="block text-center font-title text-2xl">
        Naruto Uzumaki
      </span>
      <button className="block ml-auto py-2 px-8 text-amber-50 rounded-2xl bg-blue-400 font-text">
        Ver mas
      </button>
    </article>
  );
}
