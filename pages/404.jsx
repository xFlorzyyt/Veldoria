import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Dostum yolunumu kaybettin',
        'yolun sonuna geldin bilader',
        'Yanlış adres girdin dostum geri don',
    ];

    return <ErrorPage code={HATA} message={messages[Math.floor(Math.random()*messages.length)] || "Sayfa bulunamadi."} />
}

export default UnkownPage;

