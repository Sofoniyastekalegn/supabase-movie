import {createClient } from "@/utils/supabase/server";

export default async function Instruments() {
    const supabase = await createClient();
    const { data: Instruments } = await supabase.from("instruments").select();
    
    return <pre
}