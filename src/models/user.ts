export interface UserProfile {
    id: number;
    language: string;
    first_name: string;
    avatar: string;
    last_name: string;
    phone_number: string;
    gender: number;
    personal_email: string;
    address: string;
    identity_card_number: string;
    place_identity_card: string;
    bank_account: string;
    email: string;
    work_location: string;
    department: string;
    position: string;
    number_social_insurance: number | null;
    form_of_working: string;
    family_allowances: number | null;
    company_paid: number | null;
    company_contract: string;
    personnel_status: string;
    progress_completion: number;
    salary_calculation_method: string;
    registration_hours: number | null;
    position_allowance: number;
    parking_allowance: number;
    bta_allowance: number;
    vehicle_type: string | null;
    birthday: string;
    phase_2_start_date: string;
    date_identity_card: string;
    contract_signing_date: string | null;
    contract_start_date: string;
    contract_end_date: string | null;
    social_insurance_premium: number | null;
    home_town: string;
    full_name: string;
    parking_method: string | null;
    account_type: {
        role_id: number;
        role_name: string;
    }[];
    isAdmin: boolean;
}

export interface AuthUser {
    access_token: string,
    avatar: string,
    email: string,
    expires_at: string,
    first_name: string,
    last_name: string,
    full_name?: string,
    user_id: bigint
}

export interface ParamsUserLogin {
    email: string,
    password: string
}
