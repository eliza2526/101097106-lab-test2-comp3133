export interface Rocket {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: {
      cores: Array<{
        core_serial: string;
        flight: number;
        block: number | null;
        gridfins: boolean;
        legs: boolean;
        reused: boolean;
        land_success: boolean | null;
        landing_intent: boolean;
        landing_type: string | null;
        landing_vehicle: string | null;
      }>;
    };
    second_stage: {
      block: number;
      payloads: Array<{
        payload_id: string;
        customers: string[];
        nationality: string;
        manufacturer: string;
        payload_type: string;
        orbit: string;
      }>;
    };
    fairings: {
      reused: boolean;
      recovery_attempt: boolean;
      recovered: boolean;
      ship: string | null;
    };
  }
  
  export interface Mission {
    flight_number: number;
    mission_name: string;
    launch_year: string;
    launch_date_utc: string;
    rocket: Rocket;
    launch_site: {
      site_name_long: string;
    };
    links: {
      mission_patch: string;
      mission_patch_small: string;
      article_link: string | null;
      wikipedia: string | null;
      video_link: string | null;
    };
    details: string;
    launch_success: boolean;
    launch_failure_details?: {
      time: number;
      altitude: number;
      reason: string;
    };
  }
  