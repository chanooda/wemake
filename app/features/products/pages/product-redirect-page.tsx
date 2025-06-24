import { redirect } from "react-router";
import { LINK } from "~/common/config";
import type { Route } from "./+types/product-redirect-page";

export const loader = ({ params }: Route.LoaderArgs) => {
  const { productId } = params;
  return redirect(`${LINK.PRODUCT_OVERVIEW(productId)}`);
};
