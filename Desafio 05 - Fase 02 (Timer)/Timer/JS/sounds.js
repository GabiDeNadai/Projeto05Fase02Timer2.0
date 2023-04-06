

export default function () {

  const buttonForestSound = document.querySelector('.forest-sound')
  const buttonRainSound = document.querySelector('.rain-sound')
  const buttonCoffeeShopSound = document.querySelector('.coffee-shop-sound')
  const buttonFireplaceSound = document.querySelector('.fireplace-sound')
  const pressForest = new Audio("./Sounds/Floresta.wav")
  const pressRain = new Audio("./Sounds/Chuva.wav")
  const pressCoffeShop = new Audio("./Sounds/Cafeteria.wav")
  const pressFireplace = new Audio("./Sounds/Lareira.wav")

  pressForest.loop = true
  pressRain.loop = true
  pressCoffeShop.loop = true
  pressFireplace.loop = true


  function stopAllSounds() {
    buttonForestSound.classList.remove('active')
    buttonRainSound.classList.remove('active')
    buttonCoffeeShopSound.classList.remove('active')
    buttonFireplaceSound.classList.remove('active')
    pressForest.pause()
    pressRain.pause()
    pressCoffeShop.pause()
    pressFireplace.pause()
  }

  function forestSoundOn() {
    buttonForestSound.classList.add('active')
    buttonRainSound.classList.remove('active')
    buttonCoffeeShopSound.classList.remove('active')
    buttonFireplaceSound.classList.remove('active')
    pressForest.play()
    pressRain.pause()
    pressCoffeShop.pause()
    pressFireplace.pause()
  }

  function rainSoundOn() {
    buttonRainSound.classList.add('active')
    buttonForestSound.classList.remove('active')
    buttonCoffeeShopSound.classList.remove('active')
    buttonFireplaceSound.classList.remove('active')
    pressForest.pause()
    pressRain.play()
    pressCoffeShop.pause()
    pressFireplace.pause()
  }

  function coffeeShopSoundOn() {
    buttonCoffeeShopSound.classList.add('active')
    buttonForestSound.classList.remove('active')
    buttonRainSound.classList.remove('active')
    buttonFireplaceSound.classList.remove('active')
    pressForest.pause()
    pressRain.pause()
    pressCoffeShop.play()
    pressFireplace.pause()
  }

  function fireplaceSoundOn() {
    buttonFireplaceSound.classList.add('active')
    buttonForestSound.classList.remove('active')
    buttonRainSound.classList.remove('active')
    buttonCoffeeShopSound.classList.remove('active')
    pressForest.pause()
    pressRain.pause()
    pressCoffeShop.pause()
    pressFireplace.play()
  }

  return {
    forestSoundOn,
    rainSoundOn,
    coffeeShopSoundOn,
    fireplaceSoundOn,
    stopAllSounds
  }

}