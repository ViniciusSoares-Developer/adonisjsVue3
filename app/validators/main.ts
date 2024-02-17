/* eslint-disable @typescript-eslint/no-unused-vars */
import vine from '@vinejs/vine'
import { DateTime } from 'luxon'
import { report } from 'process'

export const accountRegisterValidator = vine.compile(
  vine.object({
    fullName: vine.string().optional(),
    email: vine
      .string()
      .email()
      .confirmed({ confirmationField: 'emailConfirmation' })
      .exists(async (db, value, _field) => {
        return !(await db.from('users').where('email', value).first())
      }),
    // .unique(async (db, value, _field) => {
    //   return !(await db.from('users').where('email', value).first())
    // }),
    password: vine.string().confirmed({ confirmationField: 'passwordConfirmation' }),
    date: vine.date({
      formats: ['YYYY-MM-DD HH:mm:ss'],
    })
  })
)

export const accountLoginValidator = vine.compile(
  vine.object({
    // date: vine.string().transform((v, f) => {
    //   const d = new Date(v)
    //   if (!isNaN(d.getTime())) return d
    //   else throw f.report('Invalid date', 'DateTime', f)
    //   // if (date) return date
    //   // else return report()
    // })
    date: vine.date().transform((date) => {
      return DateTime.fromJSDate(date)
    })
    // email: vine.string().email(),
    // password: vine.string(),
  })
)
