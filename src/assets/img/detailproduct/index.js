const Images = () => {
    const photos = [];
    for (let i = 1; i <= 25; i++) {
        if(i < 10) {
            photos.push({
                img: require(`./img-0${i}.png`),
                img_2x: require(`./img-0${i}@2x.png`),
                img_3x: require(`./img-0${i}@3x.png`),
            })
        } else {
            photos.push({
                img: require(`./img-${i}.png`),
                img_2x: require(`./img-${i}@2x.png`),
                img_3x: require(`./img-${i}@3x.png`),
            })
        }
    }

    return photos;
}

const Photos = Images();

export default Photos;