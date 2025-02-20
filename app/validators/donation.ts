import vine from '@vinejs/vine'

export const createDonationsValidator = vine.compile(
  vine.object({
    donor_id: vine.string(),
    food_id: vine.string(),
    quantity_donated: vine.number(),
  })
)