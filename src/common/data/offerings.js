/**
 * {
 *      asin: "1123",
 * offerings = [
 *      offeringID,
 *      promo
 * }]
 *
https://www.amazon.com/gp/item-dispatch?submit.addToCart&offeringID.1=QM03rVtz1Bfkt9Lk9wXsZg1He7MYjREYkoCGlEJHooOO1m78qiJmB%2F6zZfO6jhTonzBqgH5WRgz7D6SiQBpGmx7P%2FNY4Qaavq%2BZw4xFZoLanANOOBCrCZVwrOHgx931%2Fbapp2x6Ivj2a75CaON3GtA%3D%3D
 */
let offerings = [
    {
        url: 'https://www.amazon.com/gp/product/B07V7T29SS?th=1',
        asin: 'B07V7T29SS',
        sellerId: null,
        error: 'no such element: Unable to locate element: {"method":"css selector","selector":"input#dsv-add-to-cart"}\n  (Session info: headless chrome=102.0.5005.49)\n  (Driver info: chromedriver=102.0.5005.27 (df4a85108ffad4dca2c409c52f24df7ec0204b91-refs/branch-heads/5005_22@{#4}),platform=Mac OS X 12.3.1 x86_64)'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07W7CBKZG?th=1',
        asin: 'B07W7CBKZG',
        sellerId: null,
        offeringID:
            '6pHiR4xoomWXHBy6hoH7dNwvzbVAMLNAQhq7YUrMjOERpv8NGgOa6dfv8yaU7ecv2VgQ73Q%2Bwy%2FF%2F9jRaqINpwVV%2BemvblCOj4XsaXGXttRnfVNUxRnf98aYROikv51UI3XFjcgmsDGiuvgZWDup3A%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07VMT8WK5?th=1',
        asin: 'B07VMT8WK5',
        sellerId: null,
        offeringID:
            'TqfqXYdJk%2FDlrM8mI69ongVovWnkW9PvWSe60sVVP%2BNCo9GTSWwLk3UkdlOaosRVmP0daqYAlqjqOxjtnZJ4%2FrydNKXxeiFRa8a7GIJYLcbpRZkxgJPiDQLWY%2Bbx1xzdqwicVVQ2ryoFVxfoISRkIQehDuX7SEZR4vGPfrkTIsBpjzUBv%2BH4EQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B08BFBR5X3?th=1',
        asin: 'B08BFBR5X3',
        sellerId: null,
        offeringID:
            'J8MIpnSl8EGrKMOuorSYxA3bmbOEtQwy4nGLWNcGueu779imwBPGI4EWZY4iH2IrkR1ZJtgyVocsXSJCCB3K9JPCZpk9OQsT3DDa23tWhjMTpQ5fixTHVyNXJ7CiDB%2BxNiR5LK6tDnlC7BTfa1SLtQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B09NLCNGC7?th=1',
        asin: 'B09NLCNGC7',
        sellerId: null,
        offeringID:
            'YUnBiPbWHmR3Kl5c2JZxaPbtB9C84DD2xt%2BmbF1SXzFKvkK0SZDZorPgj4ngtgY2Q5afVVosFqyOCk7puEHmRuMzaxw3Uq5%2FVkON3kEvntsJ9PGgB6etuqOzML2XRoLGdncNaSEyVHDrS7RppvAWetNxMA2FZ%2Fi14iQsb5S6e8GVzUw5ZIMGfTpCM1wZsVlA'
    }
];

export const findOfferingIDFromAsin = (offerings, asin) => {
    return offerings.find((offering) => offering.asin === asin) || {};
};

export const setOfferings = (_) => (offerings = _);

export default offerings;
