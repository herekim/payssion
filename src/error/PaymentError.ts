class PaymentError extends Error {
  constructor(message: string, public code: number) {
    super(message)
    this.name = 'PaymentError'
  }
}

export default PaymentError
