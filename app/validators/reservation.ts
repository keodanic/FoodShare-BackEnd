import vine from '@vinejs/vine'

export const updateReservationValidator = vine.compile(
  vine.object({
    token: vine.string().trim(),
  })
)