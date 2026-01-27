import { supabase } from "~/common/api"
import type { Limit } from "~/common/model"

export const getTeams = async ({limit}:Limit) => {
    const query = supabase.from("teams").select(`
        team_id,
        roles,
        product_description,        
        team_leader:profiles!inner (
            avatar,
            username
        )
        `).limit(limit)

    const {data, error} = await query

    if(error){
        throw new Error(error.message)
    }

    return data
}