interface FilmProps {
  name: string;
  src: string;
  year: number;
  rating: number;
}

interface KsiazkaProps {
  name: string;
  src: string;
  year: number;
  author: string;
  pages: number;
}

interface SongProps {
  index?: number;
  songTitle: string;
  duration: string;
}

interface MuzykaProps {
  name: string;
  src: string;
  year: number;
  author: string;
  genre: string;
  songs: SongProps[];
}

function Utwor(props: SongProps) {
  return (
    <tr>
      <td>{(props.index ?? 0) + 1}</td>
      <td>{props.songTitle}</td>
      <td>{props.duration}</td>
    </tr>
  );
}

function Film(props: FilmProps) {
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
        <p>Ocena: {props.rating}/10</p>
        {props.rating >= 8 && <p>Polecany</p>}
      </div>
    </>
  );
}

function Ksiazka(props: KsiazkaProps) {
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
        <p>stron: {props.pages}</p>
        {props.year < 2000 && <p>Klasyka</p>}
      </div>
    </>
  );
}

function Muzyka(props: MuzykaProps) {
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
        <p>{props.genre}</p>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Tytuł utworu</th>
              <th>Czas</th>
            </tr>
          </thead>
          <tbody>
            {props.songs.length === 0 ? (
              <tr>
                <td colSpan={3}>Brak utworów</td>
              </tr>
            ) : (
              props.songs.map((song, index) => (
                <Utwor
                  key={index}
                  index={index}
                  songTitle={song.songTitle}
                  duration={song.duration}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

function App() {
  const movies: FilmProps[] = [
    {
      name: "Harry Potter i Czara Ognia",
      src: "https://fwcdn.pl/fpo/57/46/95746/7537945_1.8.webp",
      year: 2005,
      rating: 7,
    },
    {
      name: "Odyseja",
      src: "https://fwcdn.pl/fpo/83/87/10068387/8243233.8.webp",
      year: 2026,
      rating: 8,
    },
    {
      name: "Flash",
      src: "https://fwcdn.pl/fpo/97/94/219794/8068884_1.3.jpg",
      year: 2023,
      rating: 7,
    },
  ];
  const books: KsiazkaProps[] = [
    {
      name: "Harry Potter i Kamień Filozoficzny",
      year: 1997,
      author: "JK Rowling",
      pages: 328,
      src: "https://cdn.swiatksiazki.pl/media/catalog/product/8/3/8399907176383.jpg?width=650&height=650&store=default&image-type=small_image",
    },
    {
      name: "The Hobbit",
      year: 1937,
      pages: 310,
      author: "J.R.R. Tolkien",
      src: "https://ecsmedia.pl/cir/b/hobbit-ZDJECIE_OKLADKI_PRZOD_DUZY/3861/14635641195493861.webp",
    },
    {
      name: "Pan Tadeusz",
      year: 1834,
      pages: 322,
      author: "Adam Mickiewicz",
      src: "https://static.profinfo.pl/storage/image/core_products/2023/9/1/64b3cb9be6ad237890e933cf76656f82/admin/preview/74491A05502KS_HD.jpg.webp",
    },
  ];
  const albums: MuzykaProps[] = [
    {
      name: "Flex Music",
      year: 2023,
      author: "OsamaSon",
      src: "https://ecsmedia.pl/c/flex-musix-b-iext152419460.jpg",
      genre: "Rage rap",
      songs: [
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
      ],
    },
    {
      name: "Najdłuższe wakacje życia",
      year: 2025,
      author: "Monday Waxie",
      src: "https://ecsmedia.pl/c/najdluzsze-wakacje-zycia-b-iext203630075.jpg",
      genre: "Polish Underground rap",
      songs: [
        { songTitle: "z ostatniej ławki", duration: "1:42" },
        { songTitle: "rap shit", duration: "1:53" },
        { songTitle: "bitch face", duration: "2:05" },
        { songTitle: "ed, edd i eddie", duration: "1:53" },
        { songTitle: "dance dance dance", duration: "2:15" },
        { songTitle: "billie", duration: "1:52" },
      ],
    },
    {
      name: "A Great Chaos",
      year: 2023,
      author: "Ken Carson",
      src: "https://ecsmedia.pl/c/a-great-chaos-b-iext138392985.jpg",
      genre: "Rage rap",
      songs: [
        { songTitle: "Green Room", duration: "2:19" },
        { songTitle: "Jennifer's Body", duration: "2:58" },
        { songTitle: "Fighting My Demons", duration: "2:27" },
        { songTitle: "Singapore", duration: "2:17" },
        { songTitle: "Lose It", duration: "2:10" },
        { songTitle: "Hardcore", duration: "2:16" },
        { songTitle: "Me N My Kup", duration: "2:38" },
        { songTitle: "It's Over", duration: "2:25" },
        { songTitle: "Succubus", duration: "2:28" },
      ],
    },
  ];

  movies.sort((first, second) => first.name.localeCompare(second.name));
  books.sort((first, second) => first.name.localeCompare(second.name));
  albums.sort((first, second) => first.name.localeCompare(second.name));

  const recentMovies = movies.filter((movie) => movie.year > 2010);
  const booksByNewest = books.slice();
  booksByNewest.sort((first, second) => second.year - first.year);
  let albumWithMostSongs = albums[0];
  for (const album of albums) {
    if (album.songs.length > albumWithMostSongs.songs.length) {
      albumWithMostSongs = album;
    }
  }

  return (
    <>
      <h1>Filmy</h1>

      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        {movies.map((movie) => (
          <Film
            key={movie.name}
            name={movie.name}
            src={movie.src}
            year={movie.year}
            rating={movie.rating}
          />
        ))}
      </div>

      <h1>Filmy wydane po 2010 roku</h1>
      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        {recentMovies.map((movie) => (
          <Film
            key={movie.name}
            name={movie.name}
            src={movie.src}
            year={movie.year}
            rating={movie.rating}
          />
        ))}
      </div>

      <h1>Książki</h1>

      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        {books.map((book) => (
          <Ksiazka
            key={book.name}
            name={book.name}
            src={book.src}
            year={book.year}
            author={book.author}
            pages={book.pages}
          />
        ))}
      </div>

      <h1>Książki od najnowszej</h1>
      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        {booksByNewest.map((book) => (
          <Ksiazka
            key={book.name}
            name={book.name}
            src={book.src}
            year={book.year}
            author={book.author}
            pages={book.pages}
          />
        ))}
      </div>

      <h1>Muzyka</h1>

      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        {albums.map((album) => (
          <Muzyka
            key={album.name}
            name={album.name}
            src={album.src}
            year={album.year}
            author={album.author}
            genre={album.genre}
            songs={album.songs}
          />
        ))}
      </div>

      <h1>Album z największą liczbą utworów</h1>
      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <Muzyka
          name={albumWithMostSongs.name}
          src={albumWithMostSongs.src}
          year={albumWithMostSongs.year}
          author={albumWithMostSongs.author}
          genre={albumWithMostSongs.genre}
          songs={albumWithMostSongs.songs}
        />
      </div>
    </>
  );
}

export default App;
