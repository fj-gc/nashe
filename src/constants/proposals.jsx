import { 
    CreditCardIcon, 
    CurrencyDollarIcon, 
    BuildingOfficeIcon, 
    AcademicCapIcon,
    FaceSmileIcon, 
    CheckCircleIcon,
    ArrowTrendingUpIcon, 
    TruckIcon, 
    GlobeAmericasIcon,
    HandThumbUpIcon,
    HeartIcon,
    MegaphoneIcon,
    ScaleIcon,
    CakeIcon,
    MapIcon,
    BanknotesIcon
} from "@heroicons/react/24/outline";

var proposals = [
    {
        title: "Inversion de dinero",
        content: "Mas inversion pública para mejorar la infraestructura",
        icon: <CreditCardIcon className="w-10 h-10 shrink-0" />
    },
    {
        title: "Reforma educativa",
        content: "Mejora del sistema educativo para una mayor eficacia",
        icon: <AcademicCapIcon className="w-10 h-10 shrink-0" />
    },
    {
        title: "No a la corrupción",
        content: "No a la corrupción, no a la impunidad",
        icon: <CheckCircleIcon className="w-10 h-10 shrink-0" />
    },
    {
        title: "Frenar la inflacion",
        content: "Frenar la inflacion para que el dinero tenga mas valor",
        icon: <ArrowTrendingUpIcon className="w-10 h-10 shrink-0" />
    },
    {
        title: "Transporte publico",
        content: "Para que sea posible ir a todos lugares del país en tren.",
        icon: <TruckIcon className="w-10 h-10 shrink-0" />
    },
    {
        title: "Monopatines eléctricos",
        content: "Porque son divertidos y no contaminan.",
        icon: <TruckIcon className="w-10 h-10 shrink-0" />
    },
    {
        title: "No mas deuda externa",
        content: "Para que podamos crecer mas rapido.",
        icon: <CurrencyDollarIcon className="w-10 h-10 shrink-0" />
    },
    {
        title: "Eliminar la pobreza",
        content: "Para que todos tengan las mismas oportunidades.",
        icon: <FaceSmileIcon className="w-10 h-10 shrink-0" />
    },
    {
        title: "Eco-friendly",
        content: "Para que el planeta sea un lugar mejor.",
        icon: <GlobeAmericasIcon className="w-10 h-10 shrink-0" />
    },
    {
        title: "Integracion regional",
        content: "Para fomentar las uniones internacionales",
        icon: <HandThumbUpIcon className="w-10 h-10 shrink-0" />
    },
    {
        title: "Paz mundial",
        content: "Aceptaremos refugiados que esten sufriendo",
        icon: <HeartIcon className="w-10 h-10 shrink-0" />
    },
    {
        title: "Libertad de expresion",
        content: "Para que las ideas de todos ayuden a mejorar el país",
        icon: <MegaphoneIcon className="w-10 h-10 shrink-0" />
    },
    {
        title: "Pais mas federal",
        content: "Para que todas las provincias tengan mas autoridad",
        icon: <ScaleIcon className="w-10 h-10 shrink-0" />
    },
    {
        title: "Fiestas mas baratas",
        content: "Para que todos puedan disfrutar con amigos",
        icon: <CakeIcon className="w-10 h-10 shrink-0" />
    },
    {
        title: "Apoyo a las PyMEs",
        content: "Para que puedan crecer y generar mas empleo",
        icon: <BuildingOfficeIcon className="w-10 h-10 shrink-0" />
    },
    {
        title: "Anexionar Uruguay",
        content: "Pacificamente, para que podamos tener mas recursos",
        icon: <MapIcon className="w-10 h-10 shrink-0" />
    },
    {
        title: "Sorteos de IVA pago",
        content: "Sorteos anuales de 100 tarjetas de IVA pago por un año",
        icon: <BanknotesIcon className="w-10 h-10 shrink-0" />
    }
];

export default proposals