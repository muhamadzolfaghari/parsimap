import { IControl, LngLatLike, Map } from 'mapbox-gl'

export default class ParsimapGeocoder implements IControl {
  private mapView?
  private container
  private readonly className?
  private readonly autoDistrict
  private readonly district?
  private readonly inputProps

  constructor(options?: IParsimapGeocoderOptions)

  onAdd(mapView: Map): HTMLDivElement

  onRemove(): void

  getDefaultPosition(): string
}

declare type DistrictType = boolean | number | string | LngLatLike

declare interface IParsimapGeocoderOptions {
  className?: string
  autoDistrict?: boolean
  district?: DistrictType
  inputProps?: IInputProps
}

declare interface IInputProps {
  placeholder?: string
}
