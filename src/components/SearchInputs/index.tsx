// export default function filterInputs() {
//   return (
//     <div className="mt-3 flex items-center gap-5">
//       <span>Filtrar por:</span>
//       <form
//         className="flex items-center gap-5"
//         onSubmit={(e) => {
//           {
//             e.preventDefault();
//             handleFilter();
//           }
//         }}
//       >
//         <label htmlFor="name">Nome:</label>
//         <input
//           id="name"
//           type="search"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="bg-gray-100 p-2 text-black"
//         />
//         <label htmlFor="language">Idioma:</label>
//         <input
//           className="p-2"
//           list="languages"
//           id="language"
//           value={searchByLanguage}
//           onChange={(e) => setSearchByLanguage(e.target.value)}
//         />
//         <datalist id="languages">
//           <OptionsLanguage />
//         </datalist>
//         <label htmlFor="continent">Continente:</label>
//         <select
//           id="continent"
//           className="p-2"
//           value={searchByContinent}
//           onChange={(e) => setSearchByContinent(e.target.value)}
//         >
//           <option value="">Select an Option</option>
//           <OptionsContinent />
//         </select>
//         <input type="submit" value="Submit" onClick={() => "s"} />
//         <input type="reset" value="Reset" onClick={resetSearch} />
//       </form>
//     </div>
//   );
// }
