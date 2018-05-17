'use strict'

import Phone from './src/Phone'

export default function phone(number) {
  return new Phone(number)
}

window.phone = number => phone(number)
