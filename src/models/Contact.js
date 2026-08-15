export class Contact {
  constructor({ phone, email, linkedin, github }) {
    this.phone = phone
    this.email = email
    this.linkedin = linkedin
    this.github = github
  }

  get phoneHref() {
    return `tel:${this.phone.replace(/\s/g, '')}`
  }

  get whatsappHref() {
    return `https://wa.me/${this.phone.replace(/\D/g, '')}`
  }

  get emailHref() {
    return `mailto:${this.email}`
  }
}
