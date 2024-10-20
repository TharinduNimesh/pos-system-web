export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      business: {
        Row: {
          approved_branches: number
          approved_cashiers: number
          business_category_id: number | null
          business_type: Database["public"]["Enums"]["BusinessType"]
          created_at: string
          id: number
          name: string
          owner_id: number | null
          status: Database["public"]["Enums"]["Status"]
          uniquename: string
        }
        Insert: {
          approved_branches: number
          approved_cashiers: number
          business_category_id?: number | null
          business_type?: Database["public"]["Enums"]["BusinessType"]
          created_at?: string
          id?: number
          name: string
          owner_id?: number | null
          status?: Database["public"]["Enums"]["Status"]
          uniquename: string
        }
        Update: {
          approved_branches?: number
          approved_cashiers?: number
          business_category_id?: number | null
          business_type?: Database["public"]["Enums"]["BusinessType"]
          created_at?: string
          id?: number
          name?: string
          owner_id?: number | null
          status?: Database["public"]["Enums"]["Status"]
          uniquename?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_business_category_id_fkey"
            columns: ["business_category_id"]
            isOneToOne: false
            referencedRelation: "business_category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
        ]
      }
      business_category: {
        Row: {
          business_type: Database["public"]["Enums"]["BusinessType"] | null
          created_at: string
          id: number
          name: string
        }
        Insert: {
          business_type?: Database["public"]["Enums"]["BusinessType"] | null
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          business_type?: Database["public"]["Enums"]["BusinessType"] | null
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      profile: {
        Row: {
          address: string | null
          business_id: number | null
          created_at: string
          email: string
          id: number
          mobile: string
          name: string
          nic: string
          role: Database["public"]["Enums"]["UserRole"]
          status: Database["public"]["Enums"]["Status"]
          user_id: string | null
          username: string | null
        }
        Insert: {
          address?: string | null
          business_id?: number | null
          created_at?: string
          email: string
          id?: number
          mobile: string
          name: string
          nic: string
          role?: Database["public"]["Enums"]["UserRole"]
          status?: Database["public"]["Enums"]["Status"]
          user_id?: string | null
          username?: string | null
        }
        Update: {
          address?: string | null
          business_id?: number | null
          created_at?: string
          email?: string
          id?: number
          mobile?: string
          name?: string
          nic?: string
          role?: Database["public"]["Enums"]["UserRole"]
          status?: Database["public"]["Enums"]["Status"]
          user_id?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profile_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "business"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      BusinessType: "StockBased" | "ServiceBased"
      Status: "Pending" | "Active" | "Suspended" | "Removed"
      UserRole: "Owner" | "Manager" | "Employee" | "Cashier"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
