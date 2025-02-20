import vine from '@vinejs/vine'

export const createVunerableValidator = vine.compile(
  vine.object({
    name: vine.string().trim(),
    email: vine
      .string()
      .email()
      .normalizeEmail()
      .unique(async (db, value) => {
        const match = await db.from('vulnerables').select('id').where('email', value).first()
        return !match
      }),
    password: vine.string().minLength(6),
    cpf: vine.string().minLength(11),
  })
)

export const updateVunerableValidator = vine.compile(
  vine.object({
    name: vine.string().trim(),
    password: vine.string().minLength(6),
  })
)
