export type Root = Root2[]

export interface Root2 {
  flags: Flags
  coatOfArms: CoatOfArms
  name: Name
  cca3: string
  capital: string[]
  subregion: string
  languages: Languages
  borders: string[]
  population: number
}

export interface Flags {
  png: string
  svg: string
  alt: string
}

export interface CoatOfArms {
  png: string
  svg: string
  alt?: string
}

export interface Name {
  common: string
  official: string
  nativeName: NativeName
}

export interface NativeName {
  fra?: Fra
  isl?: Isl
  deu?: Deu
  ltz?: Ltz
  ara?: Ara
  zdj?: Zdj
  eng?: Eng
  est?: Est
  bel?: Bel
  rus?: Rus
  kin?: Kin
  khm?: Khm
  ell?: Ell
  kor?: Kor
  mfe?: Mfe
  swe?: Swe
  ita?: Ita
  div?: Div
  bis?: Bis
  nya?: Nya
  kat?: Kat
  mri?: Mri
  nzs?: Nzs
  por?: Por
  slk?: Slk
  spa?: Spa
  lao?: Lao
  dan?: Dan
  fao?: Fao
  niu?: Niu
  mkd?: Mkd
  tur?: Tur
  zho?: Zho
  jam?: Jam
  ber?: Ber
  mey?: Mey
  hmo?: Hmo
  tpi?: Tpi
  lit?: Lit
  ron?: Ron
  kir?: Kir
  nld?: Nld
  pap?: Pap
  vie?: Vie
  msa?: Msa
  gsw?: Gsw
  roh?: Roh
  tha?: Tha
  uzb?: Uzb
  dzo?: Dzo
  mah?: Mah
  nno?: Nno
  nob?: Nob
  smi?: Smi
  heb?: Heb
  hrv?: Hrv
  arc?: Arc
  ckb?: Ckb
  jpn?: Jpn
  sot?: Sot
  tvl?: Tvl
  fin?: Fin
  prs?: Prs
  pus?: Pus
  tuk?: Tuk
  tir?: Tir
  cat?: Cat
  hye?: Hye
  bar?: Bar
  smo?: Smo
  tkl?: Tkl
  bjz?: Bjz
  nrf?: Nrf
  tsn?: Tsn
  glv?: Glv
  fas?: Fas
  kal?: Kal
  ben?: Ben
  bos?: Bos
  srp?: Srp
  mlt?: Mlt
  crs?: Crs
  sin?: Sin
  tam?: Tam
  grn?: Grn
  nor?: Nor
  ukr?: Ukr
  urd?: Urd
  slv?: Slv
  bwg?: Bwg
  kck?: Kck
  khi?: Khi
  ndc?: Ndc
  nde?: Nde
  sna?: Sna
  toi?: Toi
  tso?: Tso
  ven?: Ven
  xho?: Xho
  zib?: Zib
  swa?: Swa
  rar?: Rar
  pol?: Pol
  ces?: Ces
  ind?: Ind
  aym?: Aym
  que?: Que
  sag?: Sag
  pov?: Pov
  mon?: Mon
  kon?: Kon
  lin?: Lin
  lua?: Lua
  nau?: Nau
  cnr?: Cnr
  mya?: Mya
  som?: Som
  gle?: Gle
  hun?: Hun
  cha?: Cha
  nep?: Nep
  mlg?: Mlg
  kaz?: Kaz
  nfr?: Nfr
  afr?: Afr
  her?: Her
  hgm?: Hgm
  kwn?: Kwn
  loz?: Loz
  ndo?: Ndo
  lat?: Lat
  sqi?: Sqi
  hat?: Hat
  ton?: Ton
  aze?: Aze
  lav?: Lav
  gil?: Gil
  amh?: Amh
  pau?: Pau
  fij?: Fij
  hif?: Hif
  pih?: Pih
  tgk?: Tgk
  ssw?: Ssw
  tet?: Tet
  cal?: Cal
  fil?: Fil
  run?: Run
  bul?: Bul
  nbl?: Nbl
  nso?: Nso
  zul?: Zul
  hin?: Hin
}

export interface Fra {
  official: string
  common: string
}

export interface Isl {
  official: string
  common: string
}

export interface Deu {
  official: string
  common: string
}

export interface Ltz {
  official: string
  common: string
}

export interface Ara {
  official: string
  common: string
}

export interface Zdj {
  official: string
  common: string
}

export interface Eng {
  official: string
  common: string
}

export interface Est {
  official: string
  common: string
}

export interface Bel {
  official: string
  common: string
}

export interface Rus {
  official: string
  common: string
}

export interface Kin {
  official: string
  common: string
}

export interface Khm {
  official: string
  common: string
}

export interface Ell {
  official: string
  common: string
}

export interface Kor {
  official: string
  common: string
}

export interface Mfe {
  official: string
  common: string
}

export interface Swe {
  official: string
  common: string
}

export interface Ita {
  official: string
  common: string
}

export interface Div {
  official: string
  common: string
}

export interface Bis {
  official: string
  common: string
}

export interface Nya {
  official: string
  common: string
}

export interface Kat {
  official: string
  common: string
}

export interface Mri {
  official: string
  common: string
}

export interface Nzs {
  official: string
  common: string
}

export interface Por {
  official: string
  common: string
}

export interface Slk {
  official: string
  common: string
}

export interface Spa {
  official: string
  common: string
}

export interface Lao {
  official: string
  common: string
}

export interface Dan {
  official: string
  common: string
}

export interface Fao {
  official: string
  common: string
}

export interface Niu {
  official: string
  common: string
}

export interface Mkd {
  official: string
  common: string
}

export interface Tur {
  official: string
  common: string
}

export interface Zho {
  official: string
  common: string
}

export interface Jam {
  official: string
  common: string
}

export interface Ber {
  official: string
  common: string
}

export interface Mey {
  official: string
  common: string
}

export interface Hmo {
  official: string
  common: string
}

export interface Tpi {
  official: string
  common: string
}

export interface Lit {
  official: string
  common: string
}

export interface Ron {
  official: string
  common: string
}

export interface Kir {
  official: string
  common: string
}

export interface Nld {
  official: string
  common: string
}

export interface Pap {
  official: string
  common: string
}

export interface Vie {
  official: string
  common: string
}

export interface Msa {
  official: string
  common: string
}

export interface Gsw {
  official: string
  common: string
}

export interface Roh {
  official: string
  common: string
}

export interface Tha {
  official: string
  common: string
}

export interface Uzb {
  official: string
  common: string
}

export interface Dzo {
  official: string
  common: string
}

export interface Mah {
  official: string
  common: string
}

export interface Nno {
  official: string
  common: string
}

export interface Nob {
  official: string
  common: string
}

export interface Smi {
  official: string
  common: string
}

export interface Heb {
  official: string
  common: string
}

export interface Hrv {
  official: string
  common: string
}

export interface Arc {
  official: string
  common: string
}

export interface Ckb {
  official: string
  common: string
}

export interface Jpn {
  official: string
  common: string
}

export interface Sot {
  official: string
  common: string
}

export interface Tvl {
  official: string
  common: string
}

export interface Fin {
  official: string
  common: string
}

export interface Prs {
  official: string
  common: string
}

export interface Pus {
  official: string
  common: string
}

export interface Tuk {
  official: string
  common: string
}

export interface Tir {
  official: string
  common: string
}

export interface Cat {
  official: string
  common: string
}

export interface Hye {
  official: string
  common: string
}

export interface Bar {
  official: string
  common: string
}

export interface Smo {
  official: string
  common: string
}

export interface Tkl {
  official: string
  common: string
}

export interface Bjz {
  official: string
  common: string
}

export interface Nrf {
  official: string
  common: string
}

export interface Tsn {
  official: string
  common: string
}

export interface Glv {
  official: string
  common: string
}

export interface Fas {
  official: string
  common: string
}

export interface Kal {
  official: string
  common: string
}

export interface Ben {
  official: string
  common: string
}

export interface Bos {
  official: string
  common: string
}

export interface Srp {
  official: string
  common: string
}

export interface Mlt {
  official: string
  common: string
}

export interface Crs {
  official: string
  common: string
}

export interface Sin {
  official: string
  common: string
}

export interface Tam {
  official: string
  common: string
}

export interface Grn {
  official: string
  common: string
}

export interface Nor {
  official: string
  common: string
}

export interface Ukr {
  official: string
  common: string
}

export interface Urd {
  official: string
  common: string
}

export interface Slv {
  official: string
  common: string
}

export interface Bwg {
  official: string
  common: string
}

export interface Kck {
  official: string
  common: string
}

export interface Khi {
  official: string
  common: string
}

export interface Ndc {
  official: string
  common: string
}

export interface Nde {
  official: string
  common: string
}

export interface Sna {
  official: string
  common: string
}

export interface Toi {
  official: string
  common: string
}

export interface Tso {
  official: string
  common: string
}

export interface Ven {
  official: string
  common: string
}

export interface Xho {
  official: string
  common: string
}

export interface Zib {
  official: string
  common: string
}

export interface Swa {
  official: string
  common: string
}

export interface Rar {
  official: string
  common: string
}

export interface Pol {
  official: string
  common: string
}

export interface Ces {
  official: string
  common: string
}

export interface Ind {
  official: string
  common: string
}

export interface Aym {
  official: string
  common: string
}

export interface Que {
  official: string
  common: string
}

export interface Sag {
  official: string
  common: string
}

export interface Pov {
  official: string
  common: string
}

export interface Mon {
  official: string
  common: string
}

export interface Kon {
  official: string
  common: string
}

export interface Lin {
  official: string
  common: string
}

export interface Lua {
  official: string
  common: string
}

export interface Nau {
  official: string
  common: string
}

export interface Cnr {
  official: string
  common: string
}

export interface Mya {
  official: string
  common: string
}

export interface Som {
  official: string
  common: string
}

export interface Gle {
  official: string
  common: string
}

export interface Hun {
  official: string
  common: string
}

export interface Cha {
  official: string
  common: string
}

export interface Nep {
  official: string
  common: string
}

export interface Mlg {
  official: string
  common: string
}

export interface Kaz {
  official: string
  common: string
}

export interface Nfr {
  official: string
  common: string
}

export interface Afr {
  official: string
  common: string
}

export interface Her {
  official: string
  common: string
}

export interface Hgm {
  official: string
  common: string
}

export interface Kwn {
  official: string
  common: string
}

export interface Loz {
  official: string
  common: string
}

export interface Ndo {
  official: string
  common: string
}

export interface Lat {
  official: string
  common: string
}

export interface Sqi {
  official: string
  common: string
}

export interface Hat {
  official: string
  common: string
}

export interface Ton {
  official: string
  common: string
}

export interface Aze {
  official: string
  common: string
}

export interface Lav {
  official: string
  common: string
}

export interface Gil {
  official: string
  common: string
}

export interface Amh {
  official: string
  common: string
}

export interface Pau {
  official: string
  common: string
}

export interface Fij {
  official: string
  common: string
}

export interface Hif {
  official: string
  common: string
}

export interface Pih {
  official: string
  common: string
}

export interface Tgk {
  official: string
  common: string
}

export interface Ssw {
  official: string
  common: string
}

export interface Tet {
  official: string
  common: string
}

export interface Cal {
  official: string
  common: string
}

export interface Fil {
  official: string
  common: string
}

export interface Run {
  official: string
  common: string
}

export interface Bul {
  official: string
  common: string
}

export interface Nbl {
  official: string
  common: string
}

export interface Nso {
  official: string
  common: string
}

export interface Zul {
  official: string
  common: string
}

export interface Hin {
  official: string
  common: string
}

export interface Languages {
  fra?: string
  isl?: string
  deu?: string
  ltz?: string
  ara?: string
  zdj?: string
  eng?: string
  est?: string
  bel?: string
  rus?: string
  kin?: string
  khm?: string
  ell?: string
  kor?: string
  mfe?: string
  swe?: string
  ita?: string
  div?: string
  bis?: string
  nya?: string
  kat?: string
  mri?: string
  nzs?: string
  por?: string
  slk?: string
  spa?: string
  lao?: string
  dan?: string
  fao?: string
  niu?: string
  mkd?: string
  tur?: string
  zho?: string
  jam?: string
  ber?: string
  mey?: string
  hmo?: string
  tpi?: string
  lit?: string
  ron?: string
  kir?: string
  nld?: string
  pap?: string
  vie?: string
  msa?: string
  gsw?: string
  roh?: string
  tha?: string
  uzb?: string
  dzo?: string
  mah?: string
  nno?: string
  nob?: string
  smi?: string
  heb?: string
  hrv?: string
  arc?: string
  ckb?: string
  jpn?: string
  sot?: string
  tvl?: string
  fin?: string
  prs?: string
  pus?: string
  tuk?: string
  tir?: string
  cat?: string
  hye?: string
  de?: string
  eus?: string
  glc?: string
  smo?: string
  tkl?: string
  bjz?: string
  nrf?: string
  tsn?: string
  glv?: string
  fas?: string
  kal?: string
  ben?: string
  bos?: string
  srp?: string
  mlt?: string
  crs?: string
  sin?: string
  tam?: string
  grn?: string
  nor?: string
  ukr?: string
  urd?: string
  slv?: string
  bwg?: string
  kck?: string
  khi?: string
  ndc?: string
  nde?: string
  sna?: string
  toi?: string
  tso?: string
  ven?: string
  xho?: string
  zib?: string
  swa?: string
  rar?: string
  pol?: string
  ces?: string
  ind?: string
  aym?: string
  que?: string
  sag?: string
  pov?: string
  mon?: string
  kon?: string
  lin?: string
  lua?: string
  nau?: string
  cnr?: string
  mya?: string
  som?: string
  gle?: string
  hun?: string
  cha?: string
  nep?: string
  mlg?: string
  kaz?: string
  nfr?: string
  afr?: string
  her?: string
  hgm?: string
  kwn?: string
  loz?: string
  ndo?: string
  lat?: string
  sqi?: string
  hat?: string
  ton?: string
  aze?: string
  lav?: string
  gil?: string
  amh?: string
  pau?: string
  fij?: string
  hif?: string
  pih?: string
  tgk?: string
  ssw?: string
  tet?: string
  cal?: string
  fil?: string
  run?: string
  bul?: string
  nbl?: string
  nso?: string
  zul?: string
  hin?: string
}
