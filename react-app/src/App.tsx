
function Film(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          border: "1px solid black",
          padding: "20px",
        }}
      >
        <img src={props.src} alt={props.name} height={400} width={300} />
        <p>{props.name}</p>
        <p>{props.year}</p>
      </div>
    </>
  );
}

function Ksiazka(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          border: "1px solid black",
          padding: "20px",
        }}
      >
        <img src={props.src} alt={props.name} height={400} width={300} />
        <p>{props.name}</p>
        <p>{props.year}</p>
        <p>{props.author}</p>
      </div>
    </>
  );
}

function Muzyka(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          border: "1px solid black",
          padding: "20px",
        }}
      >
        <img src={props.src} alt={props.name} height={400} width={300} />
        <p>{props.name}</p>
        <p>{props.year}</p>
        <p>{props.author}</p>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Tytuł utworu</th>
              <th>Czas</th>
            </tr>
          </thead>
          <tbody>
            {props.songs.map((song, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{song.songTitle}</td>
                <td>{song.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <h1>Filmy</h1>

      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <Film
          name="Harry Potter i Czara Ognia"
          src="https://fwcdn.pl/fpo/57/46/95746/7537945_1.8.webp"
          year={2005}
        />

        <Film
          name="Odyseja"
          src="https://fwcdn.pl/fpo/83/87/10068387/8243233.8.webp"
          year={2026}
        />

        <Film
          name="Flash"
          src="https://fwcdn.pl/fpo/97/94/219794/8068884_1.3.jpg"
          year={2023}
        />
      </div>

      <h1>Książki</h1>

      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <Ksiazka
          name="Harry Potter i Kamień Filozoficzny"
          year={1997}
          author="JK Rowling"
          src="https://cdn.swiatksiazki.pl/media/catalog/product/8/3/8399907176383.jpg?width=650&height=650&store=default&image-type=small_image"
        />

        <Ksiazka
          name="The Hobbit"
          year={1937}
          author="J.R.R. Tolkien"
          src="https://ecsmedia.pl/cir/b/hobbit-ZDJECIE_OKLADKI_PRZOD_DUZY/3861/14635641195493861.webp"
        />

        <Ksiazka
          name="Pan Tadeusz"
          year={1834}
          author="Adam Mickiewicz"
          src="https://static.profinfo.pl/storage/image/core_products/2023/9/1/64b3cb9be6ad237890e933cf76656f82/admin/preview/74491A05502KS_HD.jpg.webp"
        />
      </div>

      <h1>Muzyka</h1>

      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <Muzyka
          name="Flex Music"
          year={2023}
          author="OsamaSon"
          src="https://ecsmedia.pl/c/flex-musix-b-iext152419460.jpg"
          songs={[
            { songTitle: "Blonde", duration: "2:24" },
            { songTitle: "Baghdad", duration: "2:03" },
            { songTitle: "All Star", duration: "2:01" },
            { songTitle: "For Da Flex", duration: "1:57" },
            { songTitle: "Worst Part", duration: "2:28" },
            { songTitle: "Trenches", duration: "1:56" },
            { songTitle: "Nothing", duration: "2:09" },
            { songTitle: "3x", duration: "1:32" },
            { songTitle: "Boss Up", duration: "2:40" },
            { songTitle: "Kills", duration: "4:08" },
            // { songTitle: "Kome Thru", duration: "2:20" },
            // { songTitle: "Me When", duration: "1:58" },
            // { songTitle: "Uno", duration: "1:49" },
            // { songTitle: "Str8 Flexin", duration: "1:37" },
            // { songTitle: "Congrats", duration: "1:39" },
            // { songTitle: "Pop", duration: "1:49" },
            // { songTitle: "Talking 2 A Ghost", duration: "2:02" },
          ]}
        />

        <Muzyka
          name="Najdłuższe wakacje życia"
          year={2025}
          author="Monday Waxie"
          src="https://ecsmedia.pl/c/najdluzsze-wakacje-zycia-b-iext203630075.jpg"
          songs={[
            { songTitle: "z ostatniej ławki", duration: "1:42" },
            { songTitle: "rap shit", duration: "1:53" },
            { songTitle: "bitch face", duration: "2:05" },
            { songTitle: "ed, edd i eddie", duration: "1:53" },
            { songTitle: "dance dance dance", duration: "2:15" },
            { songTitle: "billie", duration: "1:52" },
          ]}
        />
        <Muzyka
          name="A Great Chaos"
          year={2023}
          author="Ken Carson"
          src="https://ecsmedia.pl/c/a-great-chaos-b-iext138392985.jpg"
          songs={[
            { songTitle: "Green Room", duration: "2:19" },
            { songTitle: "Jennifer's Body", duration: "2:58" },
            { songTitle: "Fighting My Demons", duration: "2:27" },
            { songTitle: "Singapore", duration: "2:17" },
            { songTitle: "Lose It", duration: "2:10" },
            { songTitle: "Hardcore", duration: "2:16" },
            { songTitle: "Me N My Kup", duration: "2:38" },
            { songTitle: "It's Over", duration: "2:25" },
            { songTitle: "Succubus", duration: "2:28" },
            { songTitle: "Paranoid", duration: "2:36" },
        ]}
/>
      </div>
    </>
  );
}

export default App;