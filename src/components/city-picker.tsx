"use client"

import Link from "next/link"
import { FC, useState } from "react"
import { Country, City } from "country-state-city"
import { SelectBox, SelectBoxItem, SelectBoxProps } from "@tremor/react"

import { cn } from "@/lib/utils"
import { Field } from "@/ui/field"
import { Label } from "@/ui/label"
import { buttonVariants } from "@/ui/button"
import { Alert, AlertDescription } from "@/ui/alert"

export type CountryOption = {
  name: string
  isoCode: string
}
export type CityOption = {
  name: string
  latitude: string
  longitude: string
}

export const CountrySelector: FC<
  Omit<SelectBoxProps, "children"> & { countries: CountryOption[] }
> = ({ countries, ...props }) => {
  return (
    <Field>
      <Label>Choose Country</Label>
      <SelectBox {...props}>
        {countries.map((country, i) => (
          <SelectBoxItem
            key={i}
            value={JSON.stringify(country)}
            text={country.name}
          />
        ))}
      </SelectBox>
    </Field>
  )
}

export const CitySelector: FC<
  Omit<SelectBoxProps, "children"> & { cities: CityOption[] }
> = ({ cities, ...props }) => {
  return (
    <Field>
      <Label>Choose City</Label>
      <SelectBox {...props}>
        {cities.map((city, i) => (
          <SelectBoxItem
            key={i}
            value={JSON.stringify(city)}
            text={city.name}
          />
        ))}
      </SelectBox>
    </Field>
  )
}

export const CityPicker = () => {
  const [cities, setCities] = useState<CityOption[]>()
  const [city, setCity] = useState<CityOption | null>(null)

  return (
    <div className="space-y-4">
      <CountrySelector
        countries={
          Country.getAllCountries().map((country) => ({
            name: country.name,
            isoCode: country.isoCode,
          })) as CountryOption[]
        }
        onValueChange={(val) => {
          setCities(
            City.getCitiesOfCountry(
              (JSON.parse(val) as CountryOption).isoCode
            ) as CityOption[]
          )
          setCity(null)
        }}
      />

      {!cities ? (
        <></>
      ) : cities?.length ? (
        <CitySelector
          cities={cities}
          onValueChange={(val) => {
            setCity(JSON.parse(val) as CityOption)
          }}
        />
      ) : (
        <Alert variant="destructive">
          <AlertDescription className="text-center">
            No cities available, Choose another country.
          </AlertDescription>
        </Alert>
      )}

      {city && (
        <Link
          href={{
            pathname: `/location/${city?.name}/${city?.latitude}/${city?.longitude}`,
          }}
          className={cn(buttonVariants({}), "w-full")}
        >
          Search
        </Link>
      )}
    </div>
  )
}
