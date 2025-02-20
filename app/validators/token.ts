import vine from '@vinejs/vine'

export const updateTokenValidator = vine.compile(
  vine.object({
    token: vine.string().trim(),
  })
)