import vine from '@vinejs/vine'

export const createDonorValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(3),
    cnpj: vine.string().trim(),
    email: vine.string().trim().email(),
    responsible: vine.string().trim(),
    password: vine.string().minLength(6),
    latitude: vine.number().optional(),
    longitude: vine.number().optional(),
    local: vine.string().trim(),
  })
)
