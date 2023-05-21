import { hexToConsoleColor } from "./utils/replace";

export const Reset = "\x1b[0m";
export const Bold = "\x1b[1m";
export const Thin = "\x1b[2m";
export const Underscore = "\x1b[4m";
export const Blink = "\x1b[5m";
export const Reverse = "\x1b[7m";
export const Hidden = "\x1b[8m";

export const Gray = "\x1b[30m";
export const Red = "\x1b[31m";
export const Green = "\x1b[32m";
export const Yellow = "\x1b[33m";
export const Blue = "\x1b[34m";
export const Magenta = "\x1b[35m";
export const Cyan = "\x1b[36m";
export const White = "\x1b[37m";

export const BgGray = "\x1b[40m";
export const BgRed = "\x1b[41m";
export const BgGreen = "\x1b[42m";
export const BgYellow = "\x1b[43m";
export const BgBlue = "\x1b[44m";
export const BgMagenta = "\x1b[45m";
export const BgCyan = "\x1b[46m";
export const BgWhite = "\x1b[47m";

export type Types = "success" | "error" | "info" | "debug" | "log" | "warn" | "rainbow" | "default";

export type timeZones = "Africa/Cairo" |
  "Africa/Casablanca" |
  "Africa/Ceuta" |
  "Africa/El_Aaiun" |
  "Africa/Johannesburg" |
  "Africa/Juba" |
  "Africa/Khartoum" |
  "Africa/Lagos" |
  "Africa/Maputo" |
  "Africa/Monrovia" |
  "Africa/Nairobi" | // Casa de Papel <3
  "Africa/Ndjamena" |
  "Africa/Tripoli" |
  "Africa/Tunis" |
  "Africa/Windhoek" |
  "America/Adak" |
  "America/Anchorage" |
  "Africa/Sao_Tome" |
  "America/Araguaina" |
  "America/Argentina/Buenos_Aires" |
  "America/Argentina/Catamarca" |
  "America/Argentina/Cordoba" |
  "America/Argentina/Jujuy" |
  "America/Argentina/La_Rioja" |
  "America/Argentina/Mendoza" |
  "America/Argentina/Rio_Gallegos" |
  "America/Argentina/Salta" |
  "America/Argentina/San_Juan" |
  "America/Argentina/San_Luis" |
  "America/Argentina/Tucuman" |
  "America/Argentina/Ushuaia" |
  "America/Asuncion" |
  "America/Bahia" |
  "America/Bahia_Banderas" |
  "America/Barbados" |
  "America/Belem" |
  "America/Belize" |
  "America/Boa_Vista" |
  "America/Bogota" | // Casa de Papel <3
  "America/Boise" |
  "America/Cambridge_Bay" |
  "America/Campo_Grande" |
  "America/Cancun" |
  "America/Caracas" |
  "America/Chicago" |
  "America/Chihuahua" |
  "America/Ciudad_Juarez" |
  "America/Cayenne" |
  "America/Costa_Rica" |
  "America/Cuiaba" |
  "America/Danmarkshavn" |
  "America/Dawson" |
  "America/Dawson_Creek" |
  "America/Denver" | // Casa de Papel <3
  "America/Detroit" |
  "America/Edmonton" |
  "America/Eirunepe" |
  "America/El_Salvador" |
  "America/Fort_Nelson" |
  "America/Fortaleza" |
  "America/Glace_Bay" |
  "America/Goose_Bay" |
  "America/Grand_Turk" |
  "America/Guatemala" |
  "America/Guayaquil" |
  "America/Guyana" |
  "America/Halifax" |
  "America/Havana" |
  "America/Hermosillo" |
  "America/Indiana/Indianapolis" |
  "America/Indiana/Knox" |
  "America/Indiana/Marengo" |
  "America/Indiana/Petersburg" |
  "America/Indiana/Tell_City" |
  "America/Indiana/Vevay" |
  "America/Indiana/Vincennes" |
  "America/Indiana/Winamac" |
  "America/Inuvik" |
  "America/Iqaluit" |
  "America/Jamaica" |
  "America/Juneau" |
  "America/Kentucky/Louisville" |
  "America/Kentucky/Monticello" |
  "America/La_Paz" |
  "America/Lima" |
  "America/Los_Angeles" |
  "America/Maceio" |
  "America/Managua" |
  "America/Manaus" |
  "America/Martinique" |
  "America/Matamoros" |
  "America/Mazatlan" |
  "America/Menominee" |
  "America/Merida" |
  "America/Metlakatla" |
  "America/Mexico_City" |
  "America/Miquelon" |
  "America/Moncton" |
  "America/Monterrey" |
  "America/Montevideo" |
  "America/New_York" |
  "America/Nome" |
  "America/Noronha" |
  "America/North_Dakota/Beulah" |
  "America/North_Dakota/Center" |
  "America/North_Dakota/New_Salem" |
  "America/Nuuk" |
  "America/Ojinaga" |
  "America/Panama" |
  "America/Paramaribo" |
  "America/Phoenix" |
  "America/Port-au-Prince" |
  "America/Porto_Velho" |
  "America/Puerto_Rico" |
  "America/Punta_Arenas" |
  "America/Rainy_River" |
  "America/Rankin_Inlet" |
  "America/Recife" |
  "America/Regina" |
  "America/Resolute" |
  "America/Rio_Branco" |
  "America/Santarem" |
  "America/Santiago" |
  "America/Santo_Domingo" |
  "America/Sao_Paulo" |
  "America/Scoresbysund" |
  "America/Sitka" |
  "America/St_Johns" |
  "America/Swift_Current" |
  "America/Tegucigalpa" |
  "America/Thule" |
  "America/Tijuana" |
  "America/Toronto" |
  "America/Vancouver" |
  "America/Whitehorse" |
  "America/Winnipeg" |
  "America/Yakutat" |
  "Antarctica/Casey" |
  "Antarctica/Davis" |
  "Antarctica/Macquarie" |
  "Antarctica/Mawson" |
  "Antarctica/Palmer" |
  "Antarctica/Rothera" |
  "Antarctica/Troll" |
  "Asia/Almaty" |
  "Asia/Amman" |
  "Asia/Anadyr" |
  "Asia/Aqtau" |
  "Asia/Aqtobe" |
  "Asia/Ashgabat" |
  "Asia/Atyrau" |
  "Asia/Baghdad" |
  "Asia/Baku" |
  "Asia/Bangkok" |
  "Asia/Barnaul" |
  "Asia/Beirut" |
  "Asia/Bishkek" |
  "Asia/Chita" |
  "Asia/Choibalsan" |
  "Asia/Colombo" |
  "Asia/Damascus" |
  "Asia/Dhaka" |
  "Asia/Dili" |
  "Asia/Dubai" |
  "Asia/Dushanbe" |
  "Asia/Famagusta" |
  "Asia/Gaza" |
  "Asia/Hebron" |
  "Asia/Ho_Chi_Minh" |
  "Asia/Hong_Kong" |
  "Asia/Hovd" |
  "Asia/Irkutsk" |
  "Asia/Jakarta" |
  "Asia/Jayapura" |
  "Asia/Jerusalem" |
  "Asia/Kabul" |
  "Asia/Kamchatka" |
  "Asia/Karachi" |
  "Asia/Kathmandu" |
  "Asia/Khandyga" |
  "Asia/Kolkata" |
  "Asia/Krasnoyarsk" |
  "Asia/Kuching" |
  "Asia/Kuwait" |
  "Asia/Macau" |
  "Asia/Magadan" |
  "Asia/Makassar" |
  "Asia/Manila" |
  "Asia/Nicosia" |
  "Asia/Novokuznetsk" |
  "Asia/Novosibirsk" |
  "Asia/Omsk" |
  "Asia/Oral" |
  "Asia/Pontianak" |
  "Asia/Pyongyang" |
  "Asia/Qatar" |
  "Asia/Qostanay" |
  "Asia/Qyzylorda" |
  "Asia/Riyadh" |
  "Asia/Sakhalin" |
  "Asia/Samarkand" |
  "Asia/Seoul" |
  "Asia/Shanghai" |
  "Asia/Singapore" |
  "Asia/Srednekolymsk" |
  "Asia/Taipei" |
  "Asia/Tashkent" |
  "Asia/Tbilisi" |
  "Asia/Tehran" |
  "Asia/Thimphu" |
  "Asia/Tokyo" | // Casa de Papel <3
  "Asia/Tomsk" |
  "Asia/Urumqi" |
  "Asia/Ust-Nera" |
  "Asia/Vladivostok" |
  "Asia/Yakutsk" |
  "Asia/Yangon" |
  "Asia/Yekaterinburg" |
  "Asia/Yerevan" |
  "Atlantic/Azores" |
  "Atlantic/Bermuda" |
  "Atlantic/Canary" |
  "Atlantic/Cape_Verde" |
  "Atlantic/Faroe" |
  "Atlantic/South_Georgia" |
  "Australia/Adelaide" |
  "Australia/Brisbane" |
  "Australia/Broken_Hill" |
  "Australia/Darwin" |
  "Australia/Eucla" |
  "Australia/Hobart" |
  "Australia/Lindeman" |
  "Australia/Lord_Howe" |
  "Australia/Melbourne" |
  "Australia/Perth" |
  "Australia/Sydney" |
  "Etc/GMT-1" |
  "Etc/GMT-10" |
  "Etc/GMT-11" |
  "Etc/GMT-12" |
  "Etc/GMT-13" |
  "Etc/GMT-14" |
  "Etc/GMT-2" |
  "Etc/GMT-3" |
  "Etc/GMT-4" |
  "Etc/GMT-5" |
  "Etc/GMT-6" |
  "Etc/GMT-7" |
  "Etc/GMT-8" |
  "Etc/GMT-9" |
  "Etc/GMT+1" |
  "Etc/GMT+10" |
  "Etc/GMT+11" |
  "Etc/GMT+12" |
  "Etc/GMT+2" |
  "Etc/GMT+3" |
  "Etc/GMT+4" |
  "Etc/GMT+5" |
  "Etc/GMT+6" |
  "Etc/GMT+7" |
  "Etc/GMT+8" |
  "Etc/GMT+9" |
  "Etc/UTC" |
  "Europe/Andorra" |
  "Europe/Astrakhan" |
  "Europe/Athens" |
  "Europe/Belgrade" |
  "Europe/Berlin" | // Casa de Papel <3
  "Europe/Brussels" |
  "Europe/Bucharest" |
  "Europe/Budapest" |
  "Europe/Chisinau" |
  "Europe/Dublin" |
  "Europe/Gibraltar" |
  "Europe/Helsinki" | // Casa de Papel <3
  "Europe/Istanbul" |
  "Europe/Kaliningrad" |
  "Europe/Kirov" |
  "Europe/Kyiv" |
  "Europe/Lisbon" | // Casa de Papel <3
  "Europe/London" |
  "Europe/Madrid" | // Casa de Papel <3
  "Europe/Malta" |
  "Europe/Minsk" |
  "Europe/Moscow" | // Casa de Papel <3
  "Europe/Paris" |
  "Europe/Prague" |
  "Europe/Riga" |
  "Europe/Rome" |
  "Europe/Samara" |
  "Europe/Saratov" |
  "Europe/Simferopol" |
  "Europe/Sofia" |
  "Europe/Tallinn" |
  "Europe/Tirane" |
  "Europe/Ulyanovsk" |
  "Europe/Vienna" |
  "Europe/Vilnius" |
  "Europe/Volgograd" |
  "Europe/Warsaw" |
  "Europe/Zurich" |
  "Factory" |
  "HST" |
  "Indian/Chagos" |
  "Indian/Maldives" |
  "Indian/Mauritius" |
  "MET" |
  "MST" |
  "MST7MDT" |
  "Pacific/Apia" |
  "Pacific/Auckland" |
  "Pacific/Bougainville" |
  "Pacific/Chatham" |
  "Pacific/Easter" |
  "Pacific/Efate" |
  "Pacific/Fakaofo" |
  "Pacific/Fiji" |
  "Pacific/Galapagos" |
  "Pacific/Gambier" |
  "Pacific/Guadalcanal" |
  "Pacific/Guam" |
  "Pacific/Honolulu" |
  "Pacific/Marquesas" |
  "Pacific/Nauru" |
  "Pacific/Niue" |
  "Pacific/Norfolk" |
  "Pacific/Noumea" |
  "Pacific/Pago_Pago" |
  "Pacific/Palau" |
  "Pacific/Pitcairn" |
  "Pacific/Port_Moresby" |
  "Pacific/Rarotonga" |
  "Pacific/Tahiti" |
  "Pacific/Tarawa" |
  "Pacific/Tongatapu" |
  "PST8PDT";

export const rainbowColors = [
  hexToConsoleColor("#FF0000"),
  hexToConsoleColor("#FF7F00"),
  hexToConsoleColor("#FFFF00"),
  hexToConsoleColor("#00FF00"),
  hexToConsoleColor("#0000FF"),
  hexToConsoleColor("#4B0082"),
  hexToConsoleColor("#9400D3"),
  hexToConsoleColor("#FF1493"),
  hexToConsoleColor("#FF4500"),
  hexToConsoleColor("#FFD700"),
  hexToConsoleColor("#ADFF2F"),
  hexToConsoleColor("#00FFFF"),
  hexToConsoleColor("#1E90FF"),
  hexToConsoleColor("#8A2BE2"),
  hexToConsoleColor("#FF69B4"),
  hexToConsoleColor("#FF8C00"),
  hexToConsoleColor("#DC143C"),
  hexToConsoleColor("#7FFF00"),
  hexToConsoleColor("#00BFFF"),
  hexToConsoleColor("#8B008B"),
  hexToConsoleColor("#FF00FF"),
  hexToConsoleColor("#FFA500"),
  hexToConsoleColor("#32CD32"),
  hexToConsoleColor("#FFC0CB"),
  hexToConsoleColor("#FF6347"),
  hexToConsoleColor("#7CFC00"),
  hexToConsoleColor("#00CED1"),
  hexToConsoleColor("#800080"),
  hexToConsoleColor("#FF00FF"),
  hexToConsoleColor("#FF8C69"),
  hexToConsoleColor("#7B68EE")
  ];

export type Configuration = {
  messagePatterns?: {
    success?: string;
    error?: string;
    warn?: string;
    info?: string;
    debug?: string;
    log?: string;
    rainbow?: string;
    default?: string;
  };
  customParams?: {
    [key: string]: string;
  };
  /**
   * @description Date configuration, if you want to show date in your message you can use this configuration
   * @description If you don't want to show date, you can set this configuration to null or just don't use it
   * @example
   * {
   *  date: {
   *   surrounded: "[]",
   *   format: "DD/MM/YYYY HH:mm:ss",
   *   timezone: "America/Denver"
   *  }
   * }
   */
  date?: {
    /**
     * @description Surround date with a string
     * @example "[]"
     */
    surrounded?: string;

    /**
     * @description Date format
     * @example "DD/MM/YYYY HH:mm:ss"
     */
    format?: string;

    /**
     * @description Timezone
     * @example "America/Denver"
     * @type timeZones
    */
    timezone?: timeZones;
  };
};