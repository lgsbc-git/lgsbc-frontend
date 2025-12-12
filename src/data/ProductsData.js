import migrationDynamicsIcon from "../assets/logos/Dynamics365_scalable.svg";
import upgradeIcon from "../assets/logos/Dynamics365_scalable.svg";
import archiveIcon from "../assets/logos/Dynamics365_scalable.svg";
import timesheetIcon from "../assets/logos/powerapp.png";
import fixedAssetsIcon from "../assets/logos/powerapp.png";
import azureDevOpsIcon from "../assets/logos/icons8-azure-48.png";
// import migrationDynamicsIcon from "../assets/logos/Dynamics365_scalable.svg";

export const productsData = {
  "d365-data-migration": {
  title: "Microsoft Dynamics 365 Data Migration Solution",
  sidebarActive: "Microsoft Dynamics 365 Data Migration Solution",
  heroImage: migrationDynamicsIcon,
  category: "Data Migration",

  blocks: [
    // HERO
    {
      type: "hero",
      heading: "Microsoft Dynamics 365 Data Migration Solution",
      subheading:
        "De-risk your Dynamics 365 transformation with predictable, automated, end-to-end migration.",
      button: "Migrate With Confidence",
      link: "/contact",
    },

    // SECTION — Future of Migration
    {
      type: "section-title",
      title: "The Future of Migration Is Predictable",
    },
    {
      type: "paragraph",
      text:
        "Turn your Dynamics 365 migration into a controlled, repeatable, low-risk process.",
    },
    {
      type: "paragraph",
      text:
        "Every major digital initiative depends on one critical asset: clean, reliable, and well-governed data. For organizations moving to Microsoft Dynamics 365, the largest barrier to success is rarely the platform—it’s the uncertainty of data migration.",
    },
    {
      type: "paragraph",
      text:
        "Our automated migration engine removes that uncertainty and gives leaders the one thing they rarely get during transformation: confidence.",
    },
    {
      type: "highlight",
      bg: "#00255d",
      textColor: "#ffffff",
      text:
        "Key Promise: A proven, automated, multi-cycle migration process that keeps your business running smoothly while you modernize.",
    },

    // SECTION — Business Risk
    {
      type: "section-title",
      title: "The Real Business Risk Behind Migration",
    },
    {
      type: "paragraph",
      text: "What’s at stake isn’t data—it’s operational continuity.",
    },
    {
      type: "paragraph",
      text: "Business leaders face significant challenges during digital transformation:",
    },
    {
      type: "bullets",
      items: [
        "Multi-entity, multi-phase D365 deployments",
        "Multiple legacy systems with inconsistent data",
        "Evolving business requirements",
        "Hidden data quality issues",
        "Overrun timelines + budget pressures",
        "In fact, 38% of all migrations exceed cost or schedule due to ad-hoc methods.",
      ],
    },
    {
      type: "paragraph",
      text:
        "Your business shouldn’t be one of them. We turn your highest-risk project phase into your most controlled one.",
    },

    // SECTION — Predictable Migration Engine
    {
      type: "section-title",
      title: "A Predictable Migration Engine Built for Enterprise Leaders",
    },
    {
      type: "paragraph",
      text:
        "Engineered to give executives what they need—control, transparency, and reliable outcomes.",
    },
    {
      type: "paragraph",
      text: "Core Capabilities",
    },

    // TILES — Core Capabilities
    {
      type: "tiles",
      tiles: [
        {
          icon: "FiArrowRight",
          title: "Automated data extraction, transformation, and mapping",
          description:
            "Seamlessly extract, transform, and map data across systems with zero manual intervention.",
        },
        {
          icon: "BiCheckCircle",
          title: "Continuous validation and error detection",
          description:
            "Real-time validation ensures data integrity at every step of the migration process.",
        },
        {
          icon: "FiShield",
          title: "Rollback and recovery safeguards for business protection",
          description:
            "Business protection through comprehensive rollback and recovery mechanisms.",
        },
        {
          icon: "MdOutlineDashboard",
          title: "Real-time dashboards providing full leadership visibility",
          description:
            "Executive dashboards offering transparent, real-time migration insights.",
        },
        {
          icon: "FiDatabase",
          title:
            "Support for complex data models, hierarchies, and multi-entity structures",
          description:
            "Handle complex models, hierarchies, and multi-entity structures effortlessly.",
        },
        {
          icon: "FiLink",
          title:
            "Integration with existing legacy systems for seamless transition",
          description:
            "Seamless integration with existing legacy systems for smooth transitions.",
        },
      ],
    },

    {
      type: "paragraph",
      text:
        "A single migration engine powering every cycle—repeatable, measurable, reliable.",
    },

    // SECTION — LGSTech Difference
    {
      type: "section-title",
      title: "The LGSTech Difference",
    },
    {
      type: "paragraph",
      text:
        "Where others rely on manual methods, we rely on proven methodology and automation.",
    },

    // FEATURES — 3 Pillars
    {
      type: "features",
      columns: [
        {
          icon: "FiCompass",
          title: "BIDM Methodology",
          subtitle: "Business Integrated Data Migration",
          description:
            "A proprietary, proven framework that aligns migration work with real business processes—not just technical fields.",
        },
        {
          icon: "FiUsers",
          title: "Expert Migration Specialists",
          subtitle: "Experienced Professionals",
          description:
            "Our teams are experienced professionals trained specifically in complex D365 migrations, ensuring continuity and quality from start to finish.",
        },
        {
          icon: "FiRocket",
          title: "DM REVOLVE",
          subtitle: "Automated Execution Platform",
          description:
            "Purpose-built to operationalize our methodology, DM REVOLVE runs your migration end-to-end and even nightly, providing repeatable cycles, continuous improvement, and predictable go-live confidence.",
        },
      ],
    },

    {
      type: "paragraph",
      text:
        "Together, these three pillars create a scalable migration system designed for enterprise reliability.",
    },

    // SECTION — Business Impact
    {
      type: "section-title",
      title: "The Business Impact: Faster Value, Lower Risk, Stronger Outcomes",
    },
    {
      type: "paragraph",
      text: "Accelerate your go-live without compromising accuracy.",
    },
    {
      type: "bullets",
      items: [
        "Reduced risk and minimized business disruption",
        "Shorter project timelines and faster realization of D365 value",
        "Lower overall migration cost through automation and repeatable cycles",
        "Improved data quality, raising the accuracy of reporting and decision-making",
        "Built-in scalability for global, multi-entity, or high-volume scenarios",
      ],
    },
    {
      type: "paragraph",
      text:
        "When the migration becomes predictable, the entire transformation becomes predictable.",
    },

    // SECTION — How the Journey Works
    {
      type: "section-title",
      title: "How the Journey Works",
    },
    {
      type: "paragraph",
      text: "A clean, visual roadmap for your leadership team.",
    },
    {
      type: "journey",
      phases: [
        {
          title: "Assessment & Planning",
          description:
            "Define scope, entities, systems, and readiness",
        },
        {
          title: "Data Extraction & Mapping",
          description:
            "Align your legacy data with D365 data models",
        },
        {
          title: "Automated Validation & Testing",
          description:
            "Automated checks ensure accuracy early",
        },
        {
          title: "Complete Migration Execution",
          description:
            "End-to-end automated deployment with rollback protection.",
        },
        {
          title: "Post-Migration Support",
          description:
            "Stabilization, verification, and transition guidance after go-live",
        },
      ],
    },
    {
      type: "paragraph",
      text: "Clear phases. Clear progress. Clear outcomes.",
    },

    // CTA
    {
      type: "cta",
      text: "Ready to Migrate with Confidence?",
      description:
        "Your business deserves a transformation without surprises.\nGreat transformations succeed when risk is controlled, data is trusted, and execution is predictable.\nLet’s ensure your Dynamics 365 journey delivers exactly that.",
      button: "Unlock the Migration Engine",
      link: "/contact",
    },
  ],
},

  "AX2012-upgrade": {
  title: "AX2012 to Dynamics 365 Upgrade Solution",
  sidebarActive: "AX2012 to Dynamics 365 Upgrade Solution",
  heroImage: upgradeIcon,
  category: "Data Migration",

  blocks: [
    // HERO
    {
      type: "hero",
      heading: "Modernize AX2012 with a Confident Move to Dynamics 365",
      subheading: "Unlock performance, security, and scalability in one move.",
      button: "Start Your Upgrade Journey",
      link: "/contact"
    },

    // SECTION 1
    {
      type: "section-title",
      title: "Why Move from AX2012 to Dynamics 365"
    },
    {
      type: "paragraph",
      text: "Upgrading from AX2012 is more than a version change—it’s a strategic step that strengthens security, boosts performance, and unlocks modern cloud capabilities to help your business grow."
    },

    {
  type: "tiles",
  tiles: [
    {
      icon: "FiShield",
      title: "Stronger Security & Continuous Updates",
      description:
        "AX2012 is unsupported, increasing security and operational risks. Dynamics 365 delivers ongoing updates, enterprise-grade security, and compliance support. Eliminates dependency on manual patches and outdated infrastructure."
    },
    {
      icon: "FiCloud",
      title: "Cloud Scalability & Anywhere Access",
      description:
        "Scale infrastructure on demand—no hardware required. Access applications from any device, browser, or location. Remove the burden of managing backups, servers, and disaster recovery."
    },
    {
      icon: "FiBarChart2",
      title: "Modern Experience & Better Business Insights",
      description:
        "Faster, cleaner interface designed for efficiency and productivity. Built-in analytics, improved financial and compliance capabilities, and reduced reliance on heavy customizations. Supports better decision-making and collaboration across departments."
    },
    {
      icon: "FiDollarSign",
      title: "Lower Total Cost of Ownership",
      description:
        "Replaces costly hardware and maintenance with predictable subscription pricing. Reduces IT overhead and long-term infrastructure investments."
    },
    {
      icon: "FiTrendingUp",
      title: "Future-Proof ERP Foundation",
      description:
        "Continuous enhancements, AI-driven insights, and automation tools allow Dynamics 365 to evolve with your organization. Deep integration with the Microsoft ecosystem enables innovation and long-term scalability."
    }
  ]
},


    // SECTION 2
    {
      type: "section-title",
      title: "Our Proven Upgrade Process"
    },
    {
      type: "paragraph",
      text: "Leveraging years of hands-on experience, we guide your organization through a structured, predictable, and low-risk upgrade journey. Every step is designed to minimize disruption, ensure accuracy, and maximize the value of your new Dynamics 365 environment."
    },

    // Steps in Order
    {
  type: "timelineAlternate",
  stages: [
    {
      number: 1,
      icon: "FiClipboard",
      title: "Assessment & Planning",
      description:
        "Review AX2012 environment: customizations, integrations, data, and third-party add-ons. Define what will be migrated, modernized, or retired. Develop a detailed project plan covering timelines, risks, and cutover strategy."
    },
    {
      number: 2,
      icon: "FiSettings",
      title: "Environment Preparation",
      description:
        "Provision Dynamics 365 sandboxes. Clean, organize, and validate source data. Refactor legacy customizations for cloud compatibility."
    },
    {
      number: 3,
      icon: "FiRefreshCcw",
      title: "Migration & Upgrade",
      description:
        "Convert existing code and migrate master/transactional data. Validate accuracy through structured data checks. Conduct functional, integration, and user-acceptance testing."
    },
    {
      number: 4,
      icon: "FiPlayCircle",
      title: "Cutover & Go-Live",
      description:
        "Execute a mock cutover to fine-tune timing and reduce risks. Migrate final data, switch users, and validate business processes."
    },
    {
      number: 5,
      icon: "FiTrendingUp",
      title: "Post-Upgrade Support",
      description:
        "Provide hypercare, performance monitoring, and user training. Continuous optimization ensures smooth operations and future scalability."
    }
  ]
}
,

    // SECTION 3 — Partner of Choice
    {
      type: "section-title",
      title: "What Makes Us the Upgrade Partner of Choice"
    },
    {
      type: "paragraph",
      text: "Upgrading from AX2012 demands technical mastery, strategic foresight, and a partner who understands your business inside out. With years of proven experience, we deliver reliable, efficient, and enterprise-grade Dynamics 365 outcomes—ensuring your upgrade is smooth, predictable, and positioned for long-term success."
    },

    {
  type: "tiles-bullet",
  tiles: [
    {
      title: "Seamless Data & Configuration Migration",
      bullets: [
        "Every data entity, configuration, and business rule is migrated accurately and efficiently.",
        "Structured validation cycles minimize errors, reduce rework, and ensure readiness from day one."
      ]
    },
    {
      title: "Expert Custom Code Modernization",
      bullets: [
        "Analyze, refactor, and modernize AX2012 customizations using Dynamics 365 best practices.",
        "Reduce technical debt, improve system performance, and ensure long-term maintainability."
      ]
    },
    {
      title: "Performance-Driven Upgrade",
      bullets: [
        "Optimize environments, integrations, and workloads for faster, smoother operations.",
        "Minimize downtime and maximize business continuity throughout the transition."
      ]
    },
    {
      title: "Change Management & User Enablement",
      bullets: [
        "Role-based training and hands-on guidance boost adoption and team confidence.",
        "Ensure employees fully leverage Dynamics 365 capabilities from day one."
      ]
    },
    {
      title: "Post-Upgrade Hypercare & Continuous Optimization",
      bullets: [
        "Continuous monitoring, issue resolution, and ongoing system improvements.",
        "Keep Dynamics 365 evolving with your business, delivering long-term value beyond go-live."
      ]
    }
  ]
}
,

    // SECTION 4 — Benefits
    {
      type: "section-title",
      title: "Business Benefits We Promise"
    },
    {
      type: "bullets",
      items: [
        "Minimized Business Disruption through controlled multi-cycle upgrade methodology.",
        "Enhanced Security & Compliance with ongoing updates and enterprise security.",
        "Operational Efficiency & Scalable Performance with streamlined cloud processes.",
        "Future-Proof ERP Foundation powered by AI, automation, and Microsoft ecosystem integration.",
        "Predictable, Expert-Guided Upgrade with low-risk, iterative execution.",
        "Enterprise-Grade Risk Management & Leadership Visibility with dashboards and milestone reporting."
      ]
    },

    // CTA
    {
  type: "cta",
  text: "Transform AX2012 Into a Modern Dynamics 365 Platform",
  description:
    "Your upgrade shouldn’t be a leap of faith—it's a controlled, confident step forward. Partner with experts who deliver accuracy, performance, and long-term success.",
  button: "Upgrade to Dynamics 365 Today",
  link: "/contact"
}

  ]
},

  "Legacy-application": {
  title: "Legacy Application to Fabric Data Archive Solution",
  sidebarActive: "Legacy Application to Fabric Data Archive Solution",
  heroImage: archiveIcon,
  category: "Data Migration",

  blocks: [
    // HERO
    {
      type: "hero",
      heading: "Legacy Application to Fabric Data Archive Solution",
      subheading:
        "Archive legacy datasets into Microsoft Fabric with compression & searchable retention.",
      button: "Talk to our experts",
      link: "/contact"
    },

    // SECTION 1
    { type: "section-title", title: "The Cost and Risk of Keeping Legacy Systems Alive" },

    {
      type: "paragraph",
      text:
        "Across industries, organizations continue running outdated applications long after their operational value has ended—simply because historical data is trapped inside them. These systems drain budgets, increase cyber-risk, and slow modernization efforts. The result? Heavy maintenance costs, audit delays, security exposure, and an IT landscape that becomes harder to evolve each year."
    },

    {
      type: "paragraph",
      text:
        "Our Legacy Application to Fabric Data Archive Solution provides a secure, scalable way to retire legacy systems without losing access to the critical data they contain. You keep the data, eliminate the system, and reduce cost and risk instantly."
    },

    // SECTION 2
    {
  type: "section-title",
  title: "A Strategic Solution to Retire Systems—Not Data"
},
{
  type: "paragraph",
  text:
    "This solution archives legacy datasets into Microsoft Fabric using compression, deduplication, indexing, and long-term searchable retention."
},
{
  type: "subheading",
  text: "You gain:"
},
{
  type: "bullets",
  items: [
    "A single, secure archive for all legacy data",
    "Lower storage costs and reduced infrastructure dependencies",
    "Seamless future access for audits, analytics, and compliance"
  ]
},
{
  type: "paragraph",
  text:
    "This approach allows your business to move forward—without dragging outdated systems along."
},

    // SECTION 3
    {
  type: "section-title",
  title: "Why Business Leaders Are Prioritizing Data Archiving Now"
},
{
  type: "paragraph",
  text:
    "Legacy applications represent more than IT complexity—they impact core business priorities:"
},
{
  type: "bullets",
  items: [
    "Financial efficiency: Legacy licenses, infrastructure, and specialized support consume budget with minimal value.",
    "Operational resilience: Outdated systems introduce cyber vulnerabilities and data-loss risks.",
    "Compliance readiness: Retention mandates continue to tighten; accessible, structured archives are essential.",
    "Innovation enablement: Historical data locked in old systems slows cloud adoption, analytics, and AI initiatives.",
    "M&A agility: Clean, accessible archived data is critical during acquisitions, divestitures, and due diligence."
  ]
},
{
  type: "paragraph",
  text:
    "Archiving to Fabric directly improves cost, risk, and strategic agility."
},


    // SECTION 4
    { type: "section-title", title: "The Business Problems We Address" },

    {
      type: "tiles-bullet",
      tiles: [
        {
          title: "1. High Cost of Maintaining Legacy Systems",
          bullets: [
            "Retire aging applications, servers, and licensing by archiving rather than running systems indefinitely.",
            "ROI: 40–70% reduction in legacy TCO within 3 years."
          ]
        },
        {
          title: "2. Security & Compliance Gaps",
          bullets: [
            "Legacy apps rarely meet modern security or regulatory standards. Fabric provides encryption, retention policies, and governance.",
            "ROI: Lower exposure to penalties and breaches."
          ]
        },
        {
          title: "3. Difficulty Accessing Historical Data",
          bullets: [
            "With indexing and search, auditors, analysts, and business teams can quickly retrieve archived information.",
            "ROI: Faster audits, reduced IT dependency."
          ]
        },
        {
          title: "4. Slow Modernization & Cloud Migration",
          bullets: [
            "Separating data from old systems accelerates ERP upgrades, cloud programs, and AI/analytics readiness.",
            "ROI: Faster digital transformation, lower migration cost."
          ]
        }
      ]
    },

    // SECTION 5
    {
  type: "section-title",
  title: "What Makes Our Fabric-Based Archive Different"
},
{
  type: "bullets",
  items: [
    "Advanced compression & deduplication to reduce storage footprint",
    "Searchable, indexed datasets for fast data lookup",
    "Compliance-aligned retention rules for industry and regulatory needs",
    "Deep Fabric integration for analytics, governance, and AI enablement",
    "Automated archiving workflows that reduce manual effort and errors"
  ]
},


    {
      type: "paragraph",
      text:
        "This is a fully managed, enterprise-ready archiving model designed for long-term ROI."
    },

    // SECTION 6
    // SECTION — Enterprise-Grade Benefits
{
  type: "section-title",
  title: "Enterprise-Grade Benefits You Can Measure",
},
{
  type: "paragraph",
  text:
    "Microsoft Fabric provides measurable improvements in performance, accessibility, governance, and operational efficiency—ensuring your archived data continues delivering value long after legacy systems are retired.",
},
{
  type: "tiles",
  tiles: [
    {
      icon: "FiDollarSign",
      title: "Lower Storage & Operational Costs",
      description:
        "Compression cuts storage spend; retiring legacy systems eliminates infrastructure and support overhead.",
    },
    {
      icon: "FiSearch",
      title: "Improved Data Accessibility",
      description:
        "Indexed, searchable archives enable faster reporting, audit responses, and regulatory submissions.",
    },
    {
      icon: "FiShield",
      title: "Stronger Compliance & Governance",
      description:
        "Fabric enforces retention, encryption, and governance aligned with regulations like SOX, GDPR, HIPAA, and more.",
    },
    {
      icon: "FiSettings",
      title: "Optimized Data Lifecycle Management",
      description:
        "Fabric manages classification, archival, retrieval, and lifecycle automation—without reliance on old tools.",
    },
    {
      icon: "FiCloud",
      title: "Cloud-Scale Flexibility",
      description:
        "As data grows, Fabric scales automatically without additional hardware or maintenance.",
    },
  ],
},
{
  type: "paragraph",
  text:
    "These enterprise-grade advantages reduce risk, improve operational efficiency, and ensure long-term data accessibility.",
},


    // SECTION 7
    { type: "section-title", title: "Our Proven Archiving Framework" },

    {
      type: "tiles-bullet",
      tiles: [
        {
          title: "1. Data Assessment & Classification",
          bullets: [
            "We review legacy datasets by compliance needs, sensitivity, and business value."
          ]
        },
        {
          title: "2. Archive Strategy Development",
          bullets: [
            "A tailored, policy-aligned plan identifies what to archive, how to store it, and how long to retain it."
          ]
        },
        {
          title: "3. Secure Migration, Compression & Deduplication",
          bullets: [
            "Data moves to Fabric efficiently and securely with optimized storage."
          ]
        },
        {
          title: "4. Indexing & Search Enablement",
          bullets: [
            "We configure search and indexing for fast retrieval by business, audit, or IT teams."
          ]
        },
        {
          title: "5. Monitoring & Lifecycle Maintenance",
          bullets: [
            "Fabric-based monitoring ensures security, retention, and long-term accessibility."
          ]
        }
      ]
    },

    // SECTION 8
    {
  type: "section-title",
  title: "Why Microsoft Fabric Is the Ideal Foundation"
},
{
  type: "bullets",
  items: [
    "A secure, centralized repository for long-term historical data",
    "Governance through Microsoft Purview",
    "Built-in analytics and AI readiness",
    "Lower long-term TCO vs. aging on-prem environments",
    "A future-proof foundation that scales with the business"
  ]
},

    {
      type: "paragraph",
      text:
        "Fabric ensures your archive remains accessible, compliant, and cost-efficient for years ahead."
    },

    // SECTION 9
    {
  type: "section-title",
  title: "Who This Solution Is Built For"
},
{
  type: "bullets",
  items: [
    "Organizations retiring ERP, CRM, HR, finance, or custom legacy systems",
    "Enterprises undergoing cloud transformation",
    "Companies with audit, legal, or compliance-driven retention needs",
    "Businesses involved in M&A or divestitures",
    "Highly regulated industries: manufacturing, BFSI, healthcare, retail, public sector"
  ]
},


    // CTA FINAL
    {
      type: "cta",
      text: "Take the Next Step Toward Modernization",
      description:
        "Free your organization from outdated systems and unnecessary cost. Preserve your historical data in a secure, searchable, compliant cloud archive—while unlocking immediate and long-term ROI.",
      button: "Archive Your Data Now",
      link: "/contact"
    }
  ]
},
  "NAXT2012-to-NAXT365": {
  title: "NAXT 2012 to NAXT365 Upgrade Solution",
  sidebarActive: "NAXT 2012 to NAXT365 Upgrade Solution",
  heroImage: migrationDynamicsIcon,
  category: "Data Migration",

  blocks: [
    // HERO
    {
      type: "hero",
      heading: "NAXT 2012 to NAXT365 Upgrade Solution",
      subheading:
        "Modernize Your Dealership Operations with a Unified, Intelligent, Cloud-Ready Platform",
      button: "Start Your Upgrade Journey",
      link: "/contact"
    },

    // SECTION — WHY UPGRADE
    {
      type: "section-title",
      title: "The Urgency: Why Upgrading Matters Now"
    },
    {
      type: "paragraph",
      text:
        "Running on NAXT2012 introduces risks and inefficiencies: limited support, siloed data, heavy customizations, and slower, disconnected processes."
    },
    {
      type: "paragraph",
      text:
        "NAXT365 addresses these challenges with a modern cloud architecture, dealer-focused workflows, and seamless integrations—enabling faster, smarter, and more agile business operations. This upgrade isn’t just an IT refresh—it’s a business performance transformation."
    },
    {
      type: "paragraph",
      text:
        "Built on Microsoft Dynamics 365, NAXT365 unifies every part of your dealership—rental, sales, service, parts, and finance—into a single, future-ready platform. Move beyond NAXT2012 limitations with improved visibility, lower operational risk, and enterprise-grade scalability with our proven expertise."
    },

    // SECTION — DEALER PRIORITIES
    {
      type: "section-title",
      title: "Dealer Priorities: What Success Looks Like"
    },
    {
      type: "paragraph",
      text:
        "Organizations focus on operational efficiency, cost reduction, and customer uptime. NAXT365 helps you unlock:"
    },
    {
      type: "bullets",
      items: [
        "Unified visibility across rental fleets, service operations, inventory, and finance",
        "Embedded intelligence for forecasting, service scheduling, and demand planning",
        "Mobility and productivity for field technicians and service teams",
        "Integrated business processes connecting sales, CRM, finance, and operations"
      ]
    },
    {
      type: "paragraph",
      text:
        "Every process is connected, measurable, and optimized for performance."
    },

    // SECTION — CAPABILITIES (TILES WITH ICONS)
    {
      type: "section-title",
      title: "Our Expertise in Action: Key Solution Capabilities"
    },
    {
      type: "tiles",
      tiles: [
        {
          icon: "FiLayers",
          title: "Unified Business Platform",
          description:
            "All-in-one DMS integrating sales, rental, service, parts, finance, and CRM."
        },
        {
          icon: "FiCloud",
          title: "Enhanced Integration",
          description:
            "Connect seamlessly with Power BI, Microsoft Fabric, IoT, and Azure to drive real-time insights and automation."
        },
        {
          icon: "FiClipboard",
          title: "Advanced Document Management",
          description:
            "Centralized, secure storage with indexing and fast retrieval for improved accessibility."
        },
        {
          icon: "FiSettings",
          title: "Automated Workflows",
          description:
            "Reduce manual steps across service, rental, finance, and back-office processes."
        },
        {
          icon: "FiShield",
          title: "Enterprise Security & Compliance",
          description:
            "Protect data and ensure audit readiness with Microsoft’s cloud-native security framework."
        },
        {
          icon: "FiRefreshCcw",
          title: "Minimal Downtime Migration",
          description:
            "Maintain business continuity with sandbox testing, multi-cycle validation, and optimized upgrade tools."
        }
      ]
    },

    // SECTION — BUSINESS IMPACT
    {
      type: "section-title",
      title: "The Measurable Business Impact"
    },
    {
      type: "tiles-bullet",
      tiles: [
        {
          title: "Streamlined Operations",
          bullets: [
            "Unified processes shorten cycle times and eliminate inefficiencies across departments."
          ]
        },
        {
          title: "Cost Savings Through Automation",
          bullets: [
            "Reduce legacy maintenance, manual handoffs, and redundant tasks."
          ]
        },
        {
          title: "Faster, Smarter Decision-Making",
          bullets: [
            "Real-time visibility across customers, equipment, inventory, and financials."
          ]
        },
        {
          title: "Higher Technician & Fleet Productivity",
          bullets: [
            "Optimize service routes, reduce repair times, and improve equipment uptime."
          ]
        },
        {
          title: "Future-Ready Cloud Foundation",
          bullets: [
            "Scale across branches and geographies while leveraging continuous Microsoft updates."
          ]
        }
      ]
    },

    // SECTION — RISK MITIGATION
    {
      type: "section-title",
      title: "Mitigating Risks: How We Overcome Upgrade Challenges"
    },
    {
      type: "paragraph",
      text:
        "Upgrading from NAXT2012 doesn’t have to be risky. We handle legacy customizations, data inconsistencies, multi-branch operations, heavy dealer workflows, and integration dependencies—delivering a predictable, low-disruption upgrade that keeps your dealership running smoothly."
    },

    // SECTION — TIMELINE FLOW (your alternate vertical timeline)
    {
      type: "section-title",
      title: "Proven, Low-Disruption Upgrade Process"
    },
    {
      type: "timelineAlternate",
      stages: [
        {
          number: 1,
          icon: "FiSearch",
          title: "System Assessment & Requirements Gathering",
          description:
            "Evaluate your NAXT2012 environment, integrations, and customizations."
        },
        {
          number: 2,
          icon: "FiDatabase",
          title: "Data Migration & Configuration",
          description:
            "Clean, migrate, and compress datasets into NAXT365 with traceability."
        },
        {
          number: 3,
          icon: "FiSettings",
          title: "Workflow Setup & Testing",
          description:
            "Configure dealer processes and run multi-cycle testing for operational continuity."
        },
        {
          number: 4,
          icon: "FiUsers",
          title: "User Training & Deployment",
          description:
            "Role-based training ensures smooth adoption and minimal friction."
        },
        {
          number: 5,
          icon: "FiTrendingUp",
          title: "Post-Upgrade Support & Optimization",
          description:
            "Stabilize workflows, fine-tune configurations, and maximize ROI from NAXT365."
        }
      ]
    },

    // SECTION — WHY TRUST US
    {
      type: "section-title",
      title: "Why Dealers Trust Us"
    },
    {
      type: "bullets",
      items: [
        "Deep expertise in NAXT2012 & NAXT365",
        "Proven track record with equipment dealerships worldwide",
        "Strong Microsoft ecosystem capabilities",
        "Reliable, cost-efficient, and predictable delivery model",
        "Comprehensive support—from assessment to optimization"
      ]
    },
    {
      type: "paragraph",
      text:
        "We don’t just upgrade your system—we elevate your operations."
    },

    // CTA
    {
      type: "cta",
      text: "Take the Leap: Upgrade to NAXT365 Today",
      description:
        "Transform your NAXT2012 environment into a modern, intelligent, cloud-ready dealership platform with NAXT365. Unified, scalable, and insight-driven—your dealership can operate faster, smarter, and more profitably.",
      button: "Get the Product",
      link: "/contact"
    }
  ]
},
"timesheeet-management": {
  title: "Timesheet Management Solution",
  sidebarActive: "Timesheet Management Solution",
  heroImage: timesheetIcon,
  category: "Power Apps Solutions",

  blocks: [
    // HERO
    {
      type: "hero",
      heading: "Timesheet Management Solution",
      subheading: "Track time accurately. Automate approvals. Accelerate billing.",
      button: "Get a custom demo",
      link: "/contact"
    },

    // SECTION 1
    {
      type: "section-title",
      title: "Why Modern Timesheet Management Matters"
    },
    {
      type: "paragraph",
      text:
        "Manual or disconnected timesheet processes slow down billing, reduce productivity, and create frustration across teams. Organizations need a system that is fast, reliable, compliant, and integrated—without adding admin overhead."
    },
    {
      type: "paragraph",
      text:
        "Our Timesheet Management Solution eliminates the delays, errors, and bottlenecks associated with traditional time tracking, giving your teams a smoother, smarter way to manage time."
    },

    // SECTION 2
    {
      type: "section-title",
      title: "Meeting Today’s Time Tracking Challenges with Smart Solutions"
    },
    {
      type: "paragraph",
      text:
        "Employees need simplicity, managers need visibility, and finance needs billing accuracy—and this solution brings all three together. By unifying time capture, automated approvals, and billing integration, it streamlines operations end-to-end. You get precise time tracking across teams and projects, rule-based approvals, real-time utilization insights, seamless billing integration for faster invoicing, and mobile-first access for field and remote teams. Every entry becomes traceable, auditable, and instantly actionable, giving your organization the control and clarity it needs."
    },

    // SECTION 3 — WHAT YOUR TEAMS GAIN (tiles)
    {
      type: "section-title",
      title: "What Your Teams Gain with Smarter Timesheets"
    },
    {
      type: "paragraph",
      text: "A modern time-tracking platform designed for accuracy, efficiency, and speed."
    },
    {
      type: "tiles",
      tiles: [
        {
          icon: "FiClipboard",
          title: "Seamless Time Tracking",
          description: "Effortless capture of working hours, overtime, and project-wise time."
        },
        {
          icon: "FiRefreshCcw",
          title: "Automated Approval Workflows",
          description:
            "Configurable, rule-based workflows that move timesheets from submission to approval with zero follow-ups."
        },
        {
          icon: "FiLink",
          title: "Integrated Billing",
          description:
            "Sync time entries directly with billing systems for error-free, faster invoicing."
        },
        {
          icon: "FiCloud",
          title: "Mobile-Ready Experience",
          description: "Track, submit, and approve timesheets anytime on any device."
        },
        {
          icon: "FiBarChart2",
          title: "Insightful Analytics",
          description:
            "Real-time dashboards for utilization, project progress, and financial insights."
        }
      ]
    },

    // SECTION 4 — Drive Efficiency (bullets)
    {
      type: "section-title",
      title: "Drive Efficiency and Profitability with Better Timesheets"
    },
    {
      type: "paragraph",
      text:
        "This solution doesn’t just track hours—it improves your entire project and billing lifecycle."
    },
    {
      type: "bullets",
      items: [
        "Higher Productivity with less manual entry and fewer approval delays",
        "Reduced Administrative Overhead through automation",
        "Accelerated Billing Cycles powered by clean, synchronized time data",
        "Improved Project Profitability through real-time insights",
        "Compliance Confidence with audit-ready time logs"
      ]
    },
    {
      type: "paragraph",
      text:
        "Every hour becomes visible. Every approval becomes faster. Every project becomes more profitable."
    },

    // SECTION 5 — Setup
    {
  type: "section-title",
  title: "Setting Up Your Timesheet Solution with Ease"
},
{
  type: "paragraph",
  text: "We designed the process to ensure quick adoption and minimal disruption."
},
{
  type: "timelineAlternate",
  stages: [
    {
      number: 1,
      icon: "FiSettings",
      title: "Setup & Configuration",
      description: "Tailor the solution to your organization’s structure"
    },
    {
      number: 2,
      icon: "FiUsers",
      title: "User Training & Adoption",
      description: "Empower teams with simple, role-based onboarding"
    },
    {
      number: 3,
      icon: "FiRefreshCcw",
      title: "Workflow Automation",
      description: "Implement rules for approvals and notifications"
    },
    {
      number: 4,
      icon: "FiLink",
      title: "Billing Integration",
      description: "Connect timesheets directly to your invoicing process"
    },
    {
      number: 5,
      icon: "FiTrendingUp",
      title: "Monitoring & Optimization",
      description: "Continuously refine based on usage data"
    }
  ]
},

    // SECTION 6 — Trust
    {
      type: "section-title",
      title: "Why Organizations Trust Our Expertise"
    },
    {
      type: "bullets",
      items: [
        "15+ years building enterprise-grade business apps",
        "Deep experience with Power Apps and Microsoft ecosystem",
        "Proven implementations across services, consulting, and project-driven businesses",
        "A delivery model focused on speed, quality, and measurable ROI"
      ]
    },
    {
      type: "paragraph",
      text:
        "We don’t just deploy software—we improve how your business tracks time, manages effort, and captures revenue."
    },

    // CTA FINAL
    {
      type: "cta",
      text: "Ready to Simplify Time Management?",
      description:
        "Automate tracking, approvals, and billing—in one unified platform.\nGet faster invoicing, cleaner insights, and higher productivity.",
      button: "Start Tracking Smarter",
      link: "/contact"
    }
  ]
}

  ,
  "fixed-assets-stock": {
  title: "Fixed Assets Stocktake Solution",
  sidebarActive: "Fixed Assets Stocktake Solution",
  heroImage: fixedAssetsIcon,
  category: "Power Apps Solutions",

  blocks: [
    // HERO
    {
      type: "hero",
      heading: "Fixed Assets Stocktake Solution",
      subheading:
        "Audit, reconcile, and manage fixed assets with speed, accuracy, and mobile automation—reducing costs, improving compliance, and boosting operational efficiency.",
      button: "Start Your Asset Audit",
      link: "/contact"
    },

    // SECTION — Smarter Asset Audits
    {
      type: "section-title",
      title: "Smarter Asset Audits for Better Business Decisions"
    },
    {
      type: "paragraph",
      text:
        "When assets go untracked, businesses face unnecessary expenses, compliance headaches, and operational inefficiencies. Manual stocktakes are slow, error-prone, and disruptive. Our solution brings speed, accuracy, and transparency to asset audits. With real-time reconciliation and automated reporting, you can reduce labor costs, optimize utilization, and make smarter investment decisions—turning asset management from a pain point into a competitive advantage."
    },

    // SECTION — Challenges
    {
      type: "section-title",
      title: "The Challenges Businesses Face"
    },
    {
      type: "paragraph",
      text:
        "Tracking assets across multiple locations can be complex and costly. Organizations often struggle with outdated or inaccurate records, time-consuming manual stocktakes, and limited visibility across sites or branches. Staying compliant with accounting and audit requirements adds further pressure, while integrating data with ERP and finance systems can be cumbersome and error-prone."
    },
    {
      type: "paragraph",
      text:
        "Our mobile-based Fixed Assets Stocktake Solution addresses these challenges directly, providing real-time reconciliation, automated reporting, and centralized tracking. With full visibility and actionable insights, you can reduce costs, improve compliance, optimize asset utilization, and gain the confidence that every asset is accounted for—no matter where it is."
    },

    // SECTION — How Our Solution Works (Timeline)
    {
      type: "section-title",
      title: "How Our Solution Works"
    },
    {
      type: "timelineAlternate",
      stages: [
        {
          number: 1,
          icon: "FiClipboard",
          title: "Asset Registration & Setup",
          description: "Catalog all assets and configure the system for your business"
        },
        {
          number: 2,
          icon: "FiTablet",
          title: "Mobile App Deployment",
          description: "Equip teams with scanning tools for efficient field audits"
        },
        {
          number: 3,
          icon: "FiSearch",
          title: "Field Auditing & Scanning",
          description: "Conduct fast, accurate audits across all locations"
        },
        {
          number: 4,
          icon: "FiBarChart2",
          title: "Data Reconciliation & Reporting",
          description: "Instantly detect discrepancies and generate audit-ready reports"
        },
        {
          number: 5,
          icon: "FiTrendingUp",
          title: "Continuous Monitoring & Optimization",
          description: "Keep asset data accurate, current, and actionable"
        }
      ]
    },

    // SECTION — Features (Tiles)
    {
      type: "section-title",
      title: "Key Features That Make a Difference"
    },
    {
      type: "tiles",
      tiles: [
        {
          icon: "FiTablet",
          title: "Mobile Inventory Scanning",
          description:
            "Barcode, QR, and RFID-enabled scanning for fast, accurate audits"
        },
        {
          icon: "FiRefreshCcw",
          title: "Real-Time Reconciliation",
          description:
            "Detect discrepancies instantly and reconcile with accounting systems"
        },
        {
          icon: "FiBarChart2",
          title: "Automated Reporting",
          description:
            "Generate variance and audit-ready reports with minimal effort"
        },
        {
          icon: "FiLink",
          title: "Integration Ready",
          description:
            "Seamless connection with ERP and asset management systems"
        },
        {
          icon: "FiTrendingUp",
          title: "Continuous Monitoring",
          description:
            "Keep asset records current and actionable across all locations"
        }
      ]
    },

    // SECTION — Business Benefits
    {
      type: "section-title",
      title: "The Business Benefits You Will See"
    },
    {
      type: "bullets",
      items: [
        "Faster, Accurate Audits – Reduce audit time, eliminate human errors, and free teams for higher-value work",
        "Lower Operational Costs – Minimize labor, reduce physical inventory expenses, and optimize resource allocation",
        "Improved Asset Utilization – Full visibility across assets allows strategic redeployment and smarter purchasing decisions",
        "Regulatory Compliance – Automated audit-ready reports ensure adherence to accounting standards and regulatory requirements",
        "Data-Driven Decision Making – Reliable asset data enables accurate depreciation, budgeting, and investment planning"
      ]
    },

    // SECTION — Why Organizations Trust Us
    {
      type: "section-title",
      title: "Why Organizations Trust Us"
    },
    {
      type: "bullets",
      items: [
        "Deep expertise in fixed asset management and mobile auditing",
        "Proven track record with multi-site, asset-intensive organizations",
        "Seamless integration with ERP and accounting systems",
        "Low-risk, predictable deployment with minimal disruption",
        "Continuous support from setup through optimization, ensuring maximum ROI"
      ]
    },

    // CTA
    {
      type: "cta",
      text: "Ready to Automate Asset Tracking?",
      description:
        "Revolutionize your fixed asset management with mobile technology. Achieve faster, more accurate audits, reduce costs, maintain compliance, and turn asset visibility into actionable insights.",
      button: "Take Control of Your Assets",
      link: "/contact"
    }
  ]
},
"azure-devops-toolkit": {
  title: "Azure DevOps Toolkit for D365 Project Management",
  sidebarActive: "Azure DevOps Toolkit for D365 Project Management",
  heroImage: azureDevOpsIcon,
  category: "Azure DevOps Solutions",

  blocks: [
    // HERO
    {
      type: "hero",
      heading: "Azure DevOps Toolkit for Dynamics 365 Project Management",
      subheading:
        "Streamline development, governance, and releases with pre-configured pipelines and policies, enabling faster, safer, and more collaborative project delivery.",
      button: "Adopt the solution",
      link: "/contact"
    },

    // SECTION — Why Teams Struggle Without DevOps
    {
      type: "section-title",
      title: "Why Teams Struggle Without DevOps"
    },
    {
      type: "paragraph",
      text:
        "Dynamics 365 projects can quickly get complicated—multiple environments, customizations, and teams all working in parallel. Without structured pipelines and clear governance, deployments slow down, errors creep in, and operational risks rise. That’s where our Azure DevOps Toolkit comes in. It automates repetitive tasks, ensures compliance, and improves code quality, so your team can focus on delivering value. With streamlined pipelines, real-time visibility, and built-in safeguards, you get faster, safer deployments and smoother project delivery every time."
    },

    // SECTION — Common Project Bottlenecks We Eliminate
    {
      type: "section-title",
      title: "Common Project Bottlenecks We Eliminate"
    },
    {
      type: "paragraph",
      text:
        "Manual builds and deployments often introduce errors, while limited visibility into project health and pipeline metrics makes it hard to track progress. Compliance gaps during releases, coordination challenges between developers, testers, and business users, and risky multi-environment deployments without rollback safety further complicate delivery. Our Azure DevOps Toolkit eliminates these pain points, providing your team with structured pipelines, real-time insights, and built-in safeguards—ensuring predictable, secure, and efficient project delivery every time."
    },

    // SECTION — A Simple, Structured Path to DevOps Success (Timeline)
    {
      type: "section-title",
      title: "A Simple, Structured Path to DevOps Success"
    },
    {
      type: "timelineAlternate",
      stages: [
        {
          number: 1,
          icon: "FiSettings",
          title: "Toolkit Setup & Configuration",
          description: "Install and configure pre-built templates for D365 projects"
        },
        {
          number: 2,
          icon: "FiPlayCircle",
          title: "Pipeline Creation & Integration",
          description:
            "Automate builds, testing, and deployments across environments"
        },
        {
          number: 3,
          icon: "FiShield",
          title: "Governance Policy Implementation",
          description:
            "Enforce work item tracking, approvals, and compliance rules"
        },
        {
          number: 4,
          icon: "FiRefreshCcw",
          title: "Release Planning & Execution",
          description:
            "Streamline multi-environment deployments with rollback safety"
        },
        {
          number: 5,
          icon: "FiTrendingUp",
          title: "Monitoring & Optimization",
          description:
            "Track project KPIs, build health, and pipeline performance in real time"
        }
      ]
    },

    // SECTION — Capabilities That Accelerate and Secure Your Projects
    {
      type: "section-title",
      title: "Capabilities That Accelerate and Secure Your Projects"
    },
    {
      type: "tiles",
      tiles: [
        {
          icon: "FiRefreshCcw",
          title: "Automated Pipelines",
          description: "CI/CD templates optimized for Dynamics 365 development"
        },
        {
          icon: "FiClipboard",
          title: "Work Item Governance",
          description:
            "Link Azure Boards with D365 projects for full visibility and accountability"
        },
        {
          icon: "FiLayers",
          title: "Release Orchestration",
          description:
            "Manage approvals, rollbacks, and multi-environment deployments seamlessly"
        },
        {
          icon: "FiBarChart2",
          title: "Performance Insights",
          description:
            "Real-time dashboards for pipeline metrics, build health, and project KPIs"
        },
        {
          icon: "FiCloud",
          title: "Azure Integration",
          description:
            "Connect effortlessly with Azure services for enhanced automation and analytics"
        }
      ]
    },

    // SECTION — Business Impact
    {
      type: "section-title",
      title: "Business Impact: Deliver Projects Smarter, Faster, Safer"
    },
    {
      type: "bullets",
      items: [
        "Accelerated Development Cycles – Reduce build and deployment times, boosting productivity",
        "Improved Code Quality & Reliability – Automated testing catches errors before release",
        "Enhanced Team Collaboration – Transparent work item tracking connects developers, testers, and business users",
        "Reduced Deployment Risks – Rollback safety and structured approvals minimize operational disruptions",
        "Scalable Project Management – Grow your DevOps processes as projects expand and teams scale"
      ]
    },

    // SECTION — Trusted by Dynamics 365 Experts Worldwide
    {
      type: "section-title",
      title: "Trusted by Dynamics 365 Experts Worldwide"
    },
    {
      type: "bullets",
      items: [
        "Tailored specifically for Microsoft Dynamics 365 projects",
        "Pre-configured CI/CD and governance templates to save setup time",
        "Proven methodology for low-risk deployments",
        "Real-time insights into project health and operational efficiency",
        "Continuous support from configuration through optimization"
      ]
    },

    // CTA
    {
      type: "cta",
      text: "Take Control of Dynamics 365 Project Delivery Today",
      description:
        "Empower your teams to build, deploy, and manage Dynamics 365 projects with confidence. Automate pipelines, enforce governance, and monitor project health in real time—delivering faster, safer, and smarter outcomes for your business.",
      button: "Talk to a product expert",
      link: "/contact"
    }
  ]
}
,
};
